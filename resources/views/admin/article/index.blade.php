<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<link rel="stylesheet" href="../css/dashboard.css">
</head>
<body>
	<div class="topnav" id="myTopnav">
	  <a href="#home" class="active">Home</a>
	  <a href="#news">News</a>
	  <a href="#contact">Contact</a>
	  <a href="#about">About</a>
	</div>

	<div class="sidebar">
	  <a class="active" href="#home">Home</a>
	  <a href="/admin/articles">Articles</a>
	  <a href="/admin/users">Users</a>
	  <a href="/admin/comments">Comments</a>
	  <a href="/admin/products">Products</a>
	</div>

	<div class="content">
	  <h1>Articles Information</h1>
		<table>
		<?php $i = 1?>
			<tr>
				<th>STT</th>
				<th>Image</th>
				<th>Title</th>
				<th>Content</th>
				<th>Update</th>
				<th>Delete</th>
			</tr>
			@foreach ($articles as $article)
				<tr>
					<td>{{$i++}}</td>
					<td><img src="{{'/storage/'.$article->image}}" width="100px" height="60px"></td>
					<td>{{$article->title}}</td>
					<td>{{$article->content}}</td>
					<td>
						<form action="{{'/admin/article/'.$article->id.'/edit'}}" method="GET">
							<button type="submit" class ="btn-update"><i class="fas fa-edit"></i></button>
						</form>
					</td>
					<td>
						<form action="{{'/admin/article/'.$article->id}}" method="POST">
							@csrf
							@method("DELETE")
							<button type="submit" class = "btn-delete"><i class="far fa-trash-alt"></i></button>
						</form>
					</td>
				</tr>
			@endforeach
		</table>
		<form action="/admin/article/create" method="GET">
			<button type="submit" class = "btn-add">Add a new article</button>
		</form>
	</div>
</body>
</html>
