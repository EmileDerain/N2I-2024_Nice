docker-compose down

docker image rm back

docker build -f .\back.Dockerfile -t green_of_earth-back .

docker-compose up -d