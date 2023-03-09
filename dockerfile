FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    ffmpeg \
    bpm-tools \
    opus-tools \
    python3-pip \
    python-is-python3
RUN curl -L https://github.com/yt-dlp/yt-dlp/raw/master/public.key | gpg --import && hash -r
RUN gpg --verify SHA2-256SUMS.sig SHA2-256SUMS && gpg --verify SHA2-512SUMS.sig SHA2-512SUMS
RUN curl -s https://deb.nodesource.com/setup_19.x | bash && hash -r
RUN apt-get update && apt-get install nodejs -y && hash -r
RUN npm install -g spotify-dl spdl-core forever pm2 yarn && hash -r
RUN git clone https://github.com/magneum/magneum
RUN cd magneum
WORKDIR /magneum
RUN git init --initial-branch=magneum 
RUN git reset --hard origin/magneum
RUN git fetch origin magneum 
RUN python -m pip install --upgrade pip
RUN python3 -m pip install -U pyinstaller -r requirements.txt
RUN npm i -g forever
RUN yarn install
EXPOSE 3000
EXPOSE 5000
EXPOSE 8000
CMD [ "yarn", "run", "server" ]
