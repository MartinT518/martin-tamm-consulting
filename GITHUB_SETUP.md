# 📦 Push to GitHub - Step by Step

## Prerequisites
- GitHub account (create one at github.com if you don't have one)
- Git installed on your computer

## Step 1: Create a New Repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `martin-tamm-consulting` (or any name you prefer)
3. Description: "Professional AI & Data Analysis Consulting Website"
4. Choose: **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

GitHub will show you instructions. Use these commands:

```bash
# Navigate to your project folder
cd ~/consulting-website

# Set your Git identity (if not already set)
git config --global user.email "martin.t-amm@live.com"
git config --global user.name "Martin Tamm"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/martin-tamm-consulting.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Verify

Go to your GitHub repository URL and you should see all your files!

---

## Alternative: Using GitHub Desktop (No Command Line)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. File → Add Local Repository → Select your `consulting-website` folder
4. Click "Publish repository"
5. Done!

---

## Next Steps: Deploy from GitHub

### Deploy to Netlify from GitHub

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize
4. Select your repository
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Now every time you push to GitHub, Netlify will automatically rebuild and deploy!**

### Deploy to Vercel from GitHub

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings
5. Click "Deploy"

---

## Making Updates

After initial setup, to update your website:

```bash
# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push

# If connected to Netlify/Vercel, it will auto-deploy!
```

---

## 🆘 Troubleshooting

### "Permission denied" error
You may need to set up SSH keys or use a personal access token. See:
[https://docs.github.com/en/authentication](https://docs.github.com/en/authentication)

### "Repository already exists"
The remote is already set. Use:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/martin-tamm-consulting.git
```

---

## 📞 Need Help?

- GitHub Docs: [docs.github.com](https://docs.github.com)
- Email: martin.t-amm@live.com

