 <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>USerName/LOGIN- Travel</title>

	<link rel="stylesheet" href="assets/plugins/bootstrap-4/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

</head>
<body>
 
 <section data-position="loginregister">
<h1>here you see all the users<h1>
</br>
<h2>USER_LIST</h2>

							 
					
					<table>
					<tr>
					<th>hotel</th>
					<th>checkin</th>
					<th>checkout</th>
					<th>room</th>
					
					</tr>
					</br>
  <% for(var i=0; i<hotel.length; i++) {%>
     <tr>
       <td><%= hotel[i].hotel%></td>
       <td><%= hotel[i].checkin %></td>
	   <td><%= hotel[i].checkout %></td>
	   <td><%= hotel[i].room %></td>
      
     </tr>
     <% } %>
	 </table>
			</section>
			
			
			
			
			
	
		
			
			<p>If user name is not added in the list</p>
			<button class="btn btn-default"><a href="/hotelbooking">Back to Login Page</a></button>
			
		</br>			





<section data-position="delete-User">
      <div>
        <h2>Remove !</h2>
        <p>
          Enter name  and click on the delete button.
		</p>
		<input type="text" placeholder="name" name="name" id="name" />
		
        <button id="delete-button">Delete</button>
      </div>
      <div id="message"></div>
    </section>

		<script src="/usermain.js"></script>
</body>
</html>
