import os
from langchain_groq import ChatGroq
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
from pydantic import SecretStr
import requests
import json

load_dotenv()
api_key = os.getenv("GROQ_API_KEY")
print("API key is ", api_key)

from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

llm = HuggingFaceEndpoint(
    model="microsoft/Phi-3-mini-4k-instruct",
    task="text-generation",
    max_new_tokens=512,
    do_sample=False,
    repetition_penalty=1.03,
)

chat = ChatHuggingFace(llm=llm, verbose=True)
messages = [
    SystemMessage(content="You are a helpful translator. Translate the user sentence to French."),
    HumanMessage(content="I love programming.")
]
result = chat.invoke(messages)
print(result)

