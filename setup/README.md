# Quality Gates Webservice Restful
## Passo a Passo para Deploy da aplicacao no Servidor Linux.

Prerequisitos:
* Java 1.8
* NodeJs 12+

### 1. Instalacao das bibliotecas NodeJs 12+
> https://github.com/aws-samples


a) executar os comandos:

    $ yum groupinstall -y 'Development Tools'
    $ yum -y install -y curl
    $ curl -sL https://rpm.nodesource.com/setup_12.x | bash -
    $ yum install epel-release
    $ yum install -y nodejs
    $ yum install npm nodejs
    $ node -v
    $ npm -v
    $ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
    $ yum install -y yarn


### 2. Instalacao/Verificacao do Java 8 no Linux
> https://linuxize.com/post/how-to-install-node-js-on-centos-7/

a) executar os comandos:

    $ yum -y update
    $ yum install java-1.8.0-openjdk
    $ java -version

Example Output:

    $ java -version. openjdk version "1.8.0_191


### 3. Install Docker
> https://docs.docker.com/engine/install/centos/

a) executar os comandos:

    $ yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
    $ yum install -y yum-utils
    $ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    $ yum-config-manager --enable docker-ce-nightly
    $ yum-config-manager --enable docker-ce-test
    $ yum install docker-ce docker-ce-cli containerd.io
    $ yum list docker-ce --showduplicates | sort -r
    $ # SET VERSION
    $ VERSION_STRING=20.10.5-3.el7
    $ yum install docker-ce-${VERSION_STRING} docker-ce-cli-${VERSION_STRING} containerd.io
    $ systemctl start docker
    $ systemctl enable docker.service
    $ systemctl enable containerd.service



Comando:

b) Testar o script `./run-api-quality-gate-server.sh`:

    $ cd /opt/devsecops-esteira-mainframe/api-quality-gate
    $ ./run-api-quality-gate-server.sh

c) Configurar o crontab syslog CD:

    $ crontab -e
    $ <INSERT>
    `
        uid=0(root) gid=0(root) groups=0(root)

        * * * * * bash -c "/opt/devsecops-esteira-mainframe/api-quality-gate-syslog/run-git-pull-add-commit-push.sh" > /opt/devsecops-esteira-mainframe/log/run-git-pull-add-commit-push.tmp 2>&1
    `
    $ <ESC> + :w + <ENTER>
    $ <ESC> + :q + <ENTER>

### 5. Dockerizing a Node.js web app

a) Install docker compose
> https://docs.docker.com/compose/install/

b) Configure docker compose
> https://docs.docker.com/compose/

Comandos para executar o DockerFile:

    $ docker build -t api-quality-gate .
    $ docker run -p 3000:3000 -d api-quality-gate
    $ docker images

    docker save api-quality-gate:latest > api-quality-gate.tar

    docker save inmetrics/api-quality-gate:latest | gzip > api-quality-gate.tar.gz

Get container ID:

    $ docker ps

Print app output:

    $ docker logs <container id>


b) Instalacao das bibliotecas:

**___common options___**: `[-P|--save-prod|-D|--save-dev|-O|--save-optional|--save-peer] [-E|--save-exact] [-B|--save-bundle] [--no-save] --dry-run]`


executar os comandos:

    $ npm install --save-dev
    result: `Pacotes adicionados com sucesso!`

    $ npm fund
    result: `api-quality-gate@1.0.0`

    $ node ./server.js

Troubleshooting:

a. Em caso de erro do comando 'npm install' execute o comando abaixo.

    $ sudo npm i --unsafe-perm



### 6. Smoke Test
> Running on http://localhost:3000/api/quality-gate/info/healthcheck


### 7. Build and Export DOCKER IMAGE to .tar

        $ docker build -t api-quality-gate .
        $ docker run -d -p 3000:3000 --name api-quality-gate
        $ docker images
        $ docker save api-quality-gate > api-quality-gate_v0.2021.05.03.tar