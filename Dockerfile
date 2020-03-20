FROM ruby:2.6.5

LABEL maintainer=​"chidong.ly@gmail.com"​

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update -qq && apt-get install -y \ 
  build-essential \
  libpq-dev \ 
  nodejs \ 
  ghostscript

RUN mkdir -p /usr/src/app/
RUN mkdir -p /usr/local/nvm
WORKDIR /usr/src/app/

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs

RUN node -v
RUN npm -v

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY Gemfile Gemfile.lock package.json yarn.lock ./
RUN gem install bundler -v 1.17.2
RUN gem install foreman -v 0.85.0
RUN bundle install --verbose --jobs 20 --retry 5

RUN npm install -g yarn
RUN yarn install --check-files

COPY . /usr/src/app/ 

# Expose port 3000 to the Docker host, so we can access it
# from the outside.
EXPOSE 3000

CMD ["bin/rails", "s", "-b", "0.0.0.0"]