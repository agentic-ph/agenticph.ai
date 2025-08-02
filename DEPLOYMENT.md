# AgenticPH Website Deployment Guide

This guide covers deploying the AgenticPH website to Cloudflare Workers for optimal performance and global distribution.

## 🚀 Quick Deployment

### Prerequisites

- Node.js 18+
- Cloudflare account
- Wrangler CLI installed globally

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare

```bash
wrangler login
```

### 3. Build and Deploy

```bash
# Build the project
npm run build

# Deploy to Cloudflare Workers
npm run deploy
```

## 🔧 Configuration

### Environment Variables

Set these in your Cloudflare Workers dashboard or via Wrangler:

```bash
# Production environment
wrangler secret put ENVIRONMENT
# Enter: production

# Optional: GitHub API token for live project data
wrangler secret put GITHUB_TOKEN
# Enter: your_github_token

# Optional: Discord bot token for community stats
wrangler secret put DISCORD_BOT_TOKEN
# Enter: your_discord_bot_token
```

### Custom Domain Setup

1. **Add your domain to Cloudflare**:

   - Add `agentic.ph` to your Cloudflare account
   - Update nameservers to Cloudflare's

2. **Configure Worker Route**:

   ```bash
   wrangler route add "agentic.ph/*" agentic-ph-web
   wrangler route add "www.agentic.ph/*" agentic-ph-web
   ```

3. **SSL/TLS Settings**:
   - Set SSL/TLS encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"
   - Enable "HTTP Strict Transport Security (HSTS)"

## 🌐 Performance Optimizations

### Cloudflare Settings

1. **Speed Optimizations**:

   - Enable "Auto Minify" for HTML, CSS, JS
   - Enable "Brotli" compression
   - Set "Browser Cache TTL" to 4 hours
   - Enable "Always Online"

2. **Caching Rules**:

   ```
   Static Assets (*.css, *.js, *.png, *.jpg, *.svg):
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month
   - Browser Cache TTL: 1 month

   HTML Pages:
   - Cache Level: Standard
   - Edge Cache TTL: 1 day
   - Browser Cache TTL: 1 hour
   ```

3. **Page Rules**:

   ```
   agentic.ph/api/*:
   - Cache Level: Bypass
   - Security Level: Medium

   *.agentic.ph:
   - Always Use HTTPS: On
   - Automatic HTTPS Rewrites: On
   ```

### Worker Configuration

The `wrangler.jsonc` file includes optimized settings:

```json
{
  "name": "agentic-ph-web",
  "compatibility_date": "2024-04-01",
  "main": "./src/index.tsx",
  "build": {
    "command": "npm run build"
  },
  "vars": {
    "ENVIRONMENT": "production"
  },
  "kv_namespaces": [
    {
      "binding": "CACHE",
      "id": "your-kv-namespace-id",
      "preview_id": "your-preview-kv-namespace-id"
    }
  ]
}
```

## 📊 Monitoring & Analytics

### Cloudflare Analytics

1. **Enable Web Analytics**:

   - Go to Analytics > Web Analytics
   - Add your domain
   - Install the beacon (already included in the site)

2. **Worker Analytics**:
   - Monitor request volume
   - Track error rates
   - Monitor CPU time usage

### Performance Monitoring

The site includes built-in performance monitoring:

- **Core Web Vitals tracking**
- **Real User Monitoring (RUM)**
- **Error tracking and reporting**
- **Resource loading metrics**

### Health Checks

Set up external monitoring:

```bash
# Health check endpoint
curl https://agentic.ph/health

# Expected response:
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🔒 Security Configuration

### Security Headers

The site automatically applies security headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: [strict policy]`

### Cloudflare Security

1. **Enable Bot Fight Mode**
2. **Configure Rate Limiting**:

   ```
   Rule: Protect against DDoS
   - If incoming requests match: All traffic
   - Then: Rate limit
   - Requests: 100 per minute
   - Action: Block
   ```

3. **Enable DDoS Protection**
4. **Configure Firewall Rules** as needed

## 🚀 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: deploy
```

### Manual Deployment

For manual deployments:

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies
npm ci

# 3. Build the project
npm run build

# 4. Deploy
npm run deploy

# 5. Verify deployment
curl https://agentic.ph/health
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**:

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Deployment Errors**:

   ```bash
   # Check Wrangler authentication
   wrangler whoami

   # Re-authenticate if needed
   wrangler logout
   wrangler login
   ```

3. **Performance Issues**:
   - Check Cloudflare Analytics for bottlenecks
   - Review Worker CPU time usage
   - Optimize images and assets

### Logs and Debugging

```bash
# View Worker logs
wrangler tail

# View deployment logs
wrangler deployments list

# Test locally
npm run dev
```

## 📈 Scaling Considerations

### Traffic Growth

- **Worker Limits**: 100,000 requests/day on free plan
- **Upgrade to Workers Paid** for unlimited requests
- **Consider Cloudflare Pro** for advanced features

### Performance Optimization

1. **Enable Argo Smart Routing** for faster global performance
2. **Use Cloudflare Images** for automatic image optimization
3. **Implement KV storage** for caching dynamic content
4. **Consider Durable Objects** for real-time features

## 🆘 Support

If you encounter issues:

1. **Check Cloudflare Status**: [status.cloudflare.com](https://status.cloudflare.com)
2. **Review Worker Logs**: `wrangler tail`
3. **Community Support**: [Discord](https://discord.gg/agentic-ph)
4. **Documentation**: [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)

---

For additional help, contact the AgenticPH team at hello@agentic.ph
