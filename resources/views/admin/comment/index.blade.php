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
	  <a href="/admin/comments">Users</a>
	  <a href="/admin/comments">Comments</a>
	  <a href="/admin/products">Products</a>
	</div>

	<div class="content">
	  <h1>Comments Information</h1>
		<table>
		<?php $i = 1?>
			<tr>
				<th>STT</th>
				<th>ID User</th>
				<th>ID Article</th>
				<th>Name</th>
                <th>Email</th>
                <th>Content</th>
                <th>Created_at</th>
				<th>Delete</th>
			</tr>
			@foreach ($comments as $comment)
				<tr>
					<td>{{$i++}}</td>
					<td>{{$comment->user_id}}</td>
					<td>{{$comment->article_id}}</td>
                    <td>{{$comment->name}}</td>
                    <td>{{$comment->email}}</td>
                    <td>{{$comment->content}}</td>
                    <td>{{$comment->created_at}}</td>
					<td>
						<form action="{{'/admin/comment/'.$comment->id}}" method="POST">
							@csrf
							@method("DELETE")
							<button type="submit" class = "btn-delete"><i class="far fa-trash-alt"></i></button>
						</form>
					</td>
				</tr>
			@endforeach
		</table>
	</div>
</body>
</html>
