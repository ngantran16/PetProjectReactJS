<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <style>
		* {
			box-sizing: border-box;
		}

		.container {
			margin-left:200px;
			margin-right:200px;
		}
		input[type="text"],
		textarea {
			font-family:  sans-serif ;
			line-height: 22px;
			width: 100%;
			padding: 22px;
			border: 1px solid #ccc;
			border-radius: 4px;
			text-align: left;
		}

		.content {
			margin-left:-100px;
		}

		label {
			padding: 12px 12px 12px 0;
			display: inline-block;
		}

		.btn-add {
			background-color: #ff6600;
			color: white;
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			float: left;
			margin-left:285px;
			margin-top:10px;
		}

		.btn-edit:hover {
			background-color: #ff6600;
		}

		.container {
			border-radius: 5px;
			background-color: #f2f2f2;
			padding: 20px;
		}

		.col-25 {
			float: left;
			width: 25%;
			margin-top: 6px;
		}

		.col-75 {
			float: left;
			width: 75%;
			margin-top: 6px;
		}
		.row:after {
			content: "";
			display: table;
			clear: both;
		}
		@media screen and (max-width: 600px) {
			.col-25,
			.col-75,
			input[type="submit"] {
				width: 100%;
				margin-top: 0;
			}
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Add A New Article</h1>
		<form method="POST" action="{{'/admin/articles'}}" enctype="multipart/form-data" >
            @csrf
			<div class="row">
				<div class="col-25">
					<label for="title">Title</label>
				</div>
				<div class="col-75">
					<input type="text" name="title">
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="content">Content</label>
				</div>
				<div class="col-75">
					<textarea name="content" style="height:200px"></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="image">Image</label>
				</div>
				<div class="col-75">
                	<input type = "file" name = "image">
				</div>
			</div>
			<div class="row">
				<button class="btn-add" type = "submit">Add</button>
			</div>
		</form>
	</div>
</body>
</html>