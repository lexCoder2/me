---
title: "Construyendo Flujos de Trabajo LLM Seguros en Producción"
description: "Lecciones aprendidas al diseñar sistemas GenAI que son realmente seguros para lanzar — desde la mitigación de inyección de prompts hasta la validación de salida y la observabilidad."
date: 2026-05-10
tags: ["IA", "LLM", "Seguridad", "Arquitectura"]
draft: false
---

Durante los últimos dos años he estado inmerso en el mundo de las integraciones LLM en producción — no demos, sino cargas de trabajo reales y reguladas en instituciones financieras. Esto es lo que desearía haber sabido antes de empezar.

## El modelo de amenaza es diferente

Con las APIs tradicionales, tus principales preocupaciones de seguridad son la autenticación, la autorización y la validación de datos en el límite. Con los LLMs tienes todo eso *más* una nueva clase de problema: el modelo mismo es parte de tu superficie de ataque.

La inyección de prompts — donde una entrada maliciosa engaña al modelo para que ignore tu prompt de sistema — es el vector más común. He visto cómo se explota de maneras que harían nervioso a cualquier CISO.

## Qué funciona realmente

### 1. Nunca confíes directamente en la salida del modelo

Trata cada respuesta LLM como entrada de usuario no confiable. Valida contra un esquema estricto antes de que toque cualquier sistema downstream. He tenido excelentes resultados con modelos Pydantic como la "puerta de salida" de una llamada LLM.

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

### 2. Separa responsabilidades con LangGraph

Las cadenas de un solo prompt fallan rápidamente bajo carga real. LangGraph te permite modelar tu flujo de trabajo como una máquina de estados explícita — cada nodo tiene una responsabilidad clara, y puedes agregar validación, registro y pasos de intervención humana en cualquier arista.

### 3. Instrumenta todo

No puedes depurar lo que no puedes observar. Agrego logging estructurado a cada llamada LLM: tokens de entrada, tokens de salida, latencia, la versión del modelo y si la respuesta pasó la validación. Esto da dividendos la primera vez que algo sale mal en producción.

## La conclusión

GenAI en producción es un problema de ingeniería, no una vibra. Trátalo con el mismo rigor que aplicarías a cualquier otra dependencia crítica, y estarás bien.
