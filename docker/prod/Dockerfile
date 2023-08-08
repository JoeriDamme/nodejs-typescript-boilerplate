# 🛠 Build the builder image
FROM node:18-alpine as builder
WORKDIR /builder

# Copy config files and source
COPY . .

# Install dependencies and build
RUN yarn || (cat /tmp/*/build.log; exit 1)
RUN yarn build

# Using Yarn plugin-production-install to copy only production dependencies
# https://gitlab.com/Larry1123/yarn-contrib/-/tree/master/packages/plugin-production-install
RUN yarn prod-install /deploy/dependencies

# Copy other needed files
RUN cp -r build /deploy

# 🚀 Build the runner image
FROM node:18-alpine as runner
WORKDIR /runner

# Copy files in logical layer order
COPY --from=builder /deploy/dependencies .
COPY --from=builder /deploy/build ./build

# ⚙️ Configure the default command
CMD yarn start