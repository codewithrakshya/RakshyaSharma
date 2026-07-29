# Rakshya AI

Streamlit chatbot for Rakshya Sharma's professional portfolio.

## Streamlit Community Cloud setup

1. Push this portfolio repository to GitHub.
2. Sign in at [share.streamlit.io](https://share.streamlit.io) with GitHub.
3. Select **Create app** and choose:
   - Repository: `codewithrakshya/RakshyaSharma`
   - Branch: `main`
   - Main file path: `ai-avatar/app.py`
4. Open **Advanced settings** and add this secret:

   ```toml
   OPENAI_API_KEY = "your-key-here"
   ```

5. Optionally add `OPENAI_MODEL = "your-model"` to override the default.
6. Deploy the app and copy its public `https://*.streamlit.app` URL.
7. In Netlify, add the environment variable:

   ```text
   REACT_APP_AI_AVATAR_URL=https://your-app.streamlit.app
   ```

8. Redeploy the portfolio so React includes the new URL.

Never commit the API key or a local `.streamlit/secrets.toml` file.
