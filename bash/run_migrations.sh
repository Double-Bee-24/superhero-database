#!/bin/bash

# Find the container ID by name "swapi_app"
CONTAINER_ID=$(docker ps --filter "name=superhero-app-backend" --format "{{.ID}}")

# Check if the container is found
if [ -z "$CONTAINER_ID" ]; then
  echo "❌ Error: Container 'superhero-database-backend' not found or not running."
  exit 1
fi

echo "🔍 Found container ID: $CONTAINER_ID"
echo "🔗 Connecting and running migrations..."

# Run migrations inside the container
docker exec -it "$CONTAINER_ID" /bin/sh -c "npm run migration:run"

echo "✅ Migrations completed!"
