# Up (build, start) services
docker-compose up -d

# Up forcing build (updates if a service has been altered)
docker-compose up -d --build

# Visualize service status
docker-compose ps

# Down (stop, remove) services
docker-compose down

# Up one service
docker-compose up <service>

#See service logs
docker-compose logs <service>
docker-compose logs --tail <number> <service>