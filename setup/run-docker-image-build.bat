@echo on

set containerName="api-quality-gate"
set imageName="node12-api-restful-service" 

cd ..
echo "Compilando nova imagem com a versao do codigo fonte..."
docker build -t %imageName% -f Dockerfile .

echo "Excluindo o container da versao anterior..."
docker rm -f %containerName%

echo "Iniciando o novo container..."
docker run -d -p 3000:3000 --name %containerName% %imageName%

echo "Print app output:"
docker logs %containerName%


