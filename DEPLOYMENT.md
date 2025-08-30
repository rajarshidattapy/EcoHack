# Ecohack Deployment Guide

This guide will help you deploy the Ecohack application on Render (Backend) and Vercel (Frontend).

## Backend Deployment (Render)

### 1. Prepare Your Backend

1. **Environment Variables**: Create a `.env` file in the `server` directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   MailPass=your_gmail_app_password
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=production
   ```

2. **Database**: Set up a MongoDB database (MongoDB Atlas recommended)

3. **Cloudinary**: Set up a Cloudinary account for image uploads

### 2. Deploy to Render

1. **Connect Repository**: 
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**:
   - **Name**: `ecohack-backend`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node 18` or higher

3. **Environment Variables**: Add all the environment variables from your `.env` file

4. **Deploy**: Click "Create Web Service"

### 3. Get Your Backend URL

After deployment, Render will provide a URL like: `https://ecohack-backend.onrender.com`

## Frontend Deployment (Vercel)

### 1. Update API Configuration

1. **Update API URL**: In `client/src/config/api.js`, replace the production URL:
   ```javascript
   const API_BASE_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-backend-url.onrender.com'  // Your actual Render URL
     : 'http://localhost:5000';
   ```

### 2. Deploy to Vercel

1. **Connect Repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

3. **Environment Variables** (if needed):
   - Add any frontend-specific environment variables

4. **Deploy**: Click "Deploy"

### 3. Get Your Frontend URL

After deployment, Vercel will provide a URL like: `https://ecohack.vercel.app`

## Post-Deployment Steps

### 1. Update CORS Configuration

In your backend `server/index.js`, update the CORS origins with your actual Vercel URL:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-url.vercel.app'] 
    : ['http://localhost:3000'],
  credentials: true
}))
```

### 2. Test Your Application

1. **Health Check**: Visit `https://your-backend-url.onrender.com/health`
2. **Frontend**: Visit your Vercel URL and test all functionality
3. **API Calls**: Verify that all API calls work correctly

### 3. Set Up Custom Domains (Optional)

- **Backend**: Configure custom domain in Render dashboard
- **Frontend**: Configure custom domain in Vercel dashboard

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure CORS origins are correctly configured
2. **Environment Variables**: Double-check all environment variables are set
3. **Database Connection**: Verify MongoDB connection string
4. **Build Errors**: Check build logs for missing dependencies

### Debugging

1. **Backend Logs**: Check Render service logs
2. **Frontend Logs**: Check Vercel deployment logs
3. **Network Tab**: Use browser dev tools to debug API calls

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to version control
2. **CORS**: Restrict CORS origins to your actual domains
3. **JWT Secrets**: Use strong, unique JWT secrets
4. **Database**: Use MongoDB Atlas with proper security settings

## Monitoring

1. **Backend**: Use Render's built-in monitoring
2. **Frontend**: Use Vercel's analytics and monitoring
3. **Database**: Monitor MongoDB Atlas performance
4. **Logs**: Set up proper logging for debugging

## Updates and Maintenance

1. **Automatic Deployments**: Both Render and Vercel support automatic deployments from Git
2. **Rollbacks**: Use version control for easy rollbacks
3. **Scaling**: Both platforms support automatic scaling
4. **Backups**: Ensure regular database backups

---

**Note**: Replace all placeholder URLs with your actual deployment URLs.
