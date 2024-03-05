
``` bash
$ npm init --yes

``` bash
$ npm i express
``

``` bash
$ npm i nodemon -D

``` bash 
$ npm i dotenv -E

#add type module into package.json para permitir el import y export
``` json
{
"type": "module",
}

``` bash 
$ git init

``` bash
$ git add .

``` bash
$ git commit -m ""

``` bash
git commit --amend  //para agregar algo al ultimo commit

```powershell
docker run -d -p 27017:27017 --name mongo -v mongo_data:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo:latest
//para crear container con imagen MONGO

```bash
npm install mongoose --save
```