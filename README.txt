Signup API

post -  http://localhost:9000/UserDetails/signup  

{
"firstName" : "Praju",
"lastName" : "Mohite",
"emailId" : "prajmoh@gmail.com",
"password" : "asdfc",
"confirmPassword" : "asdfc"
}

output:
{
    "msg": "User SignUp Successfully"
}

==============================================================================================================================================================================================

login API:

post - http://localhost:9000/UserDetails/login  

{
"emailId" : "prajmoh@gmail.com",
"password" : "asdfc"
}

output:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3NTVhNzFlMDAyOTQ0MWY5YjdmY2MiLCJpYXQiOjE2NjI1Mjg4MDh9.ZXnN0NFc7t7fbjS_gy3LA3xVNjFdO44jtkYzUDpXn1E",
    "msg": "user login Successfully"
}
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Create new blog API

post - http://localhost:8000/blog/add-blog  

{
    "userId" : "63183bdac1d395bbf6da3087",
    "tittle" : "my first blogs",
    "body"   : "asdfghk hqqqhajjkkk",
    "tags"   : ["hi", "BYE" , "hello"]
}

auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4M2JkYWMxZDM5NWJiZjZkYTMwODciLCJpYXQiOjE2NjI1MzM5ODZ9.6FOJlSURShRsM41NCGYxnQ_KDaaLpY1ZXM4ZQQehv5E

output:
        {
            "savedBlog": {
                "userId": "63183bdac1d395bbf6da3087",
                "tittle": "my first blogs",
                "body": "asdfghk hqqqhajjkkk",
                "tags": [
                    "hi",
                    "BYE",
                    "hello"
                ],
                "_id": "631849d07127443f63a28087",
                "createdAt": "2022-09-07T07:35:44.782Z",
                "updatedAt": "2022-09-07T07:35:44.782Z",
                "__v": 0
            },
            "msg": "blog added successfully"
        }

-----------------------------------------------------------------------------------------------

to update the created blog API

post - http://localhost:9000/blogRout/updateBlog   //update blogs

created blog:
{
    "userId" : "63183bdac1d395bbf6da3087",
    "tittle" : "my blog",
    "body"   : "body of the sencond blog",
    "tags"   : ["hello"]
}
Updated blog:
{
    "_id"    : "63186c642395ee2d1acd18ce",
    "userId" : "631869f62395ee2d1acd18c5",
    "tittle" : "blog is updating",
    "body"   : "body of my blog is under process",
    "tags"   : ["we"]
}

Output:

        {
            "msg": "The blog is Updated"
        }
---------------------------------------------------------------------------------------------------

To delete blog the existing API:

DELETE : http://localhost:9000/blogRout/deleteBlog

auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4NjllMjIzOTVlZTJkMWFjZDE4YzMiLCJpYXQiOjE2NjI1NDQ0ODR9.aT6O7apGNHgf9Ogm3Zj8AmuRWl3qXZKf3bptWNA3Mlw

existing blog:

{   "_id"    : "63186b952395ee2d1acd18cb",
    "userId" : "631869e22395ee2d1acd18c3",
    "tittle" : "my second blog",
    "body"   : "body of the sencond blog",
    "tags"   : ["hello"]
}

Output:
{
    "msg": "The blog is deleted"
}

______________________________________________________________________________________________