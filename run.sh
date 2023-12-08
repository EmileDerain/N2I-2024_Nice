docker-compose down

docker image rm green_of_earth-back
docker image rm green_of_earth-front

docker build -f ./back.Dockerfile -t green_of_earth-back .
docker build -f ./front.Dockerfile -t green_of_earth-front .

docker-compose up -d