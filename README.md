# Lama Book Shop CRUD Web Application

<h4><i>Enjoy your favorite books, movies, and animated characters!</i></h4>



![image](https://github.com/Norbert305/crud-react-node-mySQL-go/assets/83515541/175be89d-5555-4b38-b479-42e06aa04f8c)


# Technologies
<p>React.js, Node.js, Express, MySQL</p>

# Video Demo

https://vimeo.com/866824528?share=copy

# Backend 
<p>cd backend</p>
<p>npm install</p>
<p>npm start</p>

# Frontend 
<p>cd frontend</p>
<p>npm install</p>
<p>npm run dev</p>

# Need a mySQL DataBase
<p>I used XAMPP</p> 
<p>DataBase named test</p>
<p>Table named books</p>
http://localhost/dashboard/

# Table Values
<p>id -> primary key - not null </p>
<p>title -> not null</p>
<p>description -> not null</p>
<p>cover -> null</p>
<p>price -> not null</p>


![image](https://github.com/Norbert305/crud-react-node-mySQL-go/assets/83515541/4d825d2e-16a4-4a95-96b1-847e958d1a0f)

### Docker

#### Run
```bash
  docker compose up
```

#### Stop
```bash
  docker compose down
```

#### Delete everything (in Windows PowerShell) copy to terminal
```
docker ps -a --filter "name=crud-react-node-mysql-go" -q | ForEach-Object { docker rm -f $_ }
docker images --filter "reference=*crud-react-node-mysql-go*" -q | ForEach-Object { docker rmi -f $_ }
docker volume ls --filter "name=crud-react-node-mysql-go" -q | ForEach-Object { docker volume rm $_ }
```