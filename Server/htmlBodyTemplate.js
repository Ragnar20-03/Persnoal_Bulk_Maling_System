function htmlTemplate(obj)
{
    let body = `
<html>
<head>
    <style>
        /* CSS styles for the email */
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        ${ 1 == 1 ? 
           "  <h1> True </h1>"
           : "<h1> False </h1> "
        }
        <h2>Hello, ${obj.name} </h2>
        <p>This is a test email from Node.js with HTML content.</p>
        <p>You can include HTML content here, such as links, images, and formatted text.</p>
        <p>For example, you can include an image:</p>
        <img src=${"./demo.jpg"} alt="Example Image">
    </div>
</body>
</html>
`;
        return body
}
module.exports   = htmlTemplate