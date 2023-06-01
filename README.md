# Collector

## Database Potential
I was unable to get MongoDB to interface with electron directly after trying for days. I thought about creating a seperate app that runs as a service or something to host an API into our DB, but there SHOULD be an easier way.

https://github.com/louischatriot/nedb#creatingloading-a-database
This seems to use a subset of the MongoDB API and has explicit instructions for electon. So if/when we need a database we can try options like this as well.
