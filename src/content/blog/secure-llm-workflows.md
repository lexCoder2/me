---
title: "Building Secure LLM Workflows in Production"
description: "Lessons learned architecting GenAI systems that are actually safe to ship — from prompt injection mitigation to output validation and observability."
date: 2026-05-10
tags: ["AI", "LLM", "Security", "Architecture"]
draft: false
---

Over the past two years I've been deep in the world of production LLM integrations — not demos, but real regulated workloads at financial institutions. Here's what I wish I knew before I started.

## The threat model is different

With traditional APIs, your main security concerns are authentication, authorisation, and data validation at the boundary. With LLMs you have all of that *plus* a new class of problem: the model itself is part of your attack surface.

Prompt injection — where a malicious input tricks the model into ignoring your system prompt — is the most common vector. I've seen it exploited in ways that would make any CISO nervous.

## What actually works

### 1. Never trust model output directly

Treat every LLM response as untrusted user input. Validate against a strict schema before it touches any downstream system. I've had great results with Pydantic models as the "exit gate" from an LLM call.

```python
from pydantic import BaseModel, field_validator

class AnalysisResult(BaseModel):
    sentiment: Literal["positive", "negative", "neutral"]
    confidence: float
    summary: str

    @field_validator("confidence")
    @classmethod
    def clamp_confidence(cls, v: float) -> float:
        return max(0.0, min(1.0, v))
```

### 2. Separate concerns with LangGraph

Single-prompt chains break fast under real load. LangGraph lets you model your workflow as an explicit state machine — each node has a clear responsibility, and you can add validation, logging, and human-in-the-loop steps at any edge.

### 3. Instrument everything

You can't debug what you can't observe. I add structured logging to every LLM call: input tokens, output tokens, latency, the model version, and whether the response passed validation. This pays dividends the first time something goes sideways in production.

## The bottom line

GenAI in production is an engineering problem, not a vibe. Treat it with the same rigour you'd apply to any other critical dependency, and you'll be fine.
