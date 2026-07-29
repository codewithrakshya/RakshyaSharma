import os

import streamlit as st
from openai import OpenAI


def setting(name: str, default: str = "") -> str:
    """Read Streamlit secrets first, then regular environment variables."""
    try:
        value = st.secrets.get(name)
    except FileNotFoundError:
        value = None
    return str(value or os.getenv(name, default))


MODEL = setting("OPENAI_MODEL", "gpt-5.6-sol")

PROFILE = """
Rakshya Sharma is a San Francisco-based data analyst and bioinformatician.

Current work:
- At the University of California, San Francisco, Rakshya integrates genetic,
  clinical, phenotype, and biomarker datasets to study modifiable risk factors
  and health outcomes in Alzheimer's disease and aging populations.
- Rakshya builds reusable analytical workflows, data-quality and validation
  practices, statistical and polygenic risk-score analyses, visualizations, and
  scientific reports for interdisciplinary teams.

Background:
- B.S. in Computer Science with a minor in Bioinformatics from UC Santa Cruz.
- UCSF PROPEL Post-Baccalaureate Scholar.
- Experience includes UCSF, the UCSC Genomics Institute, the Broad Institute,
  and Lawrence Berkeley National Laboratory.

Areas of practice:
- Computational biology, statistical genetics, population-health data science,
  epidemiologic analysis, prevention science, health disparities, aging and
  neurodegenerative disease.
- Biomedical data harmonization; clinical, EHR, cohort, genomic, multi-omics,
  and other high-dimensional datasets.
- Reproducible workflows, scientific software, artificial intelligence,
  machine learning, predictive modeling, computer vision, image analysis, and
  high-performance computing.

Public links:
- Portfolio: https://rakshyausharma.com
- GitHub: https://github.com/codewithrakshya
- LinkedIn: https://www.linkedin.com/in/rakshyausharma
- ORCID: https://orcid.org/0000-0002-7026-6598
"""

INSTRUCTIONS = f"""
You are Rakshya AI, the professional portfolio assistant for Rakshya Sharma.
Speak warmly and naturally in the first person, as a concise digital
representative of Rakshya. Help visitors understand Rakshya's work, research
experience, projects, and skills.

Use only the profile below and facts already established in the conversation.
Never invent employers, degrees, publications, dates, results, or personal
details. If the profile does not support an answer, say you do not have that
detail and direct the visitor to Rakshya's portfolio or LinkedIn. Clearly
identify yourself as an AI assistant if asked. Do not provide medical advice,
clinical interpretation, or claim to speak for Rakshya in an official capacity.
Keep most answers to 2-4 short paragraphs and use bullets when they improve
clarity.

PROFILE
{PROFILE}
"""

SUGGESTED_PROMPTS = [
    "What are you working on at UCSF?",
    "Tell me about your bioinformatics background.",
    "How do you approach reproducible genomic analysis?",
    "Which technical skills do you bring to a research team?",
]

st.set_page_config(
    page_title="Rakshya AI",
    page_icon="🧬",
    layout="centered",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      .stApp { background: #ffffff; }
      header[data-testid="stHeader"] { background: transparent; }
      .block-container {
        max-width: 780px;
        padding-top: 1.5rem;
        padding-bottom: 2rem;
      }
      h1 { color: #1e1b4b; letter-spacing: -0.03em; }
      [data-testid="stChatMessage"] {
        border: 1px solid #e0e7ff;
        border-radius: 1rem;
        padding: 0.35rem 0.7rem;
      }
      [data-testid="stChatInput"] { border-color: #c7d2fe; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("🧬 Rakshya AI")
st.caption(
    "Ask about my research, professional experience, projects, and "
    "technical skills."
)

if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "assistant",
            "content": (
                "Hi, I’m Rakshya AI. I can help you explore Rakshya’s "
                "professional background. What would you like to know?"
            ),
        }
    ]

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if len(st.session_state.messages) == 1:
    st.markdown("**Try asking:**")
    columns = st.columns(2)
    selected_prompt = None
    for index, suggestion in enumerate(SUGGESTED_PROMPTS):
        if columns[index % 2].button(
            suggestion,
            key=f"suggestion-{index}",
            use_container_width=True,
        ):
            selected_prompt = suggestion
else:
    selected_prompt = None

typed_prompt = st.chat_input("Ask me about Rakshya’s work…")
prompt = typed_prompt or selected_prompt

if prompt:
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    api_key = setting("OPENAI_API_KEY")
    if not api_key:
        answer = (
            "Rakshya AI is ready, but the app still needs an "
            "`OPENAI_API_KEY` in Streamlit’s app secrets."
        )
    else:
        client = OpenAI(api_key=api_key)
        conversation = [
            message
            for message in st.session_state.messages
            if message["role"] in {"user", "assistant"}
        ]
        try:
            with st.chat_message("assistant"):
                with st.spinner("Thinking…"):
                    response = client.responses.create(
                        model=MODEL,
                        instructions=INSTRUCTIONS,
                        input=conversation,
                    )
                    answer = response.output_text
                st.markdown(answer)
        except Exception:
            answer = (
                "I’m having trouble reaching the AI service right now. "
                "Please try again in a moment."
            )
            with st.chat_message("assistant"):
                st.markdown(answer)

    if not api_key:
        with st.chat_message("assistant"):
            st.markdown(answer)

    st.session_state.messages.append(
        {"role": "assistant", "content": answer}
    )
    st.rerun()

st.divider()
st.caption(
    "AI-generated answers may contain mistakes. This assistant represents "
    "Rakshya’s public professional profile and does not provide medical or "
    "scientific advice."
)
