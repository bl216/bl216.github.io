import React from "react";

function CreateRockylinuxDockerPage() {
    return (
        <div>
            <div>
                도커에 로키리눅스 올리기


                docker-compose.rockylinux.yml<br/><br/>
                version: '3'

                services:
                localhost:
                image: rockylinux:9
                container_name: localhost
                hostname: localhost
                ports:
                - "222:22" #ssh
                - "23000:3000" #react.js
                cap_add:
                - SYS_ADMIN
                privileged: true
                stdin_open: true # docker run -i
                tty: true       # docker run -t
                command: /sbin/init

                <br/>
                    docker-compose -f docker-compose.rockylinux.yml up --build<br/>
                    docker ps<br/>
                    docker exec -it localhost /bin/bash<br/>
            </div>
        </div>
    );
}

export default CreateRockylinuxDockerPage;