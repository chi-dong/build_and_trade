FROM ruby:2.6

RUN apt-get update -yqq
RUN apt-get update && apt-get install -yqq \
  curl \
  build-essential \
  libpq-dev &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -yqq nodejs yarn

COPY . /usr/src/app/ 
WORKDIR /usr/src/app

RUN bundle install
RUN rails webpacker:install
RUN rails webpacker:install:react

CMD ["bin/rails", "s", "-b", "0.0.0.0"]