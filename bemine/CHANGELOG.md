# Changelog

## v1.0.1

### Added or Changed
- Added 'http-server' logic
- Fixed 'http-server' to handle static files
- Back to top links

### Removed

- Removed Express dependencies that had a HUGE file *400+MB*

### Issues

```RESOLVED 2024-02-14```
- node express had a huge dependencies file
  * removed entire node-modules folder
  * added http-server logic to handle static files and routes
