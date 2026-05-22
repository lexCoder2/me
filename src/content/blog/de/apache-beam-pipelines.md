---
title: "Apache Beam und die Kunst skalierbarer Pipelines"
description: "Ein praktischer Blick auf das Unified Model von Apache Beam — und die Fallstricke, die man beim Einsatz in Google-ähnlichem Produktionsmaßstab trifft."
date: 2026-03-18
tags: ["Data Engineering", "Apache Beam", "Python", "Verteilte Systeme"]
draft: false
---

Als ich dem Google-Projekt bei Wizeline beitrat, hatte ich Spark und ein wenig Flink verwendet, aber Beam war neu für mich. Ein Jahr später habe ich klare Meinungen. Hier die Zusammenfassung.

## Das Unified Model ist der eigentliche Wert

Beams Hauptargument — einmal schreiben, auf jedem Runner ausführen — klingt nach Marketing. In der Praxis ist es wirklich nützlich. Wir entwickelten und testeten Pipelines lokal mit dem DirectRunner und deployte sie dann nach Dataflow, ohne eine einzige Zeile Pipeline-Code zu ändern. Diese Feedback-Schleife ist schnell.

## Windows und Trigger sind schwierig

Late Data korrekt zu verarbeiten ist der Punkt, an dem die meisten Beam-Projekte scheitern. Die API ist ausdrucksstark, aber das mentale Modell braucht Zeit zur Verinnerlichung. Die Schlüsselerkenntnis: **Windows sind Labels, Trigger entscheiden, wann emittiert wird**. Sobald das klar war, folgte alles andere.

```python
(
    events
    | "Window" >> beam.WindowInto(
        beam.window.SlidingWindows(size=60, period=10),
        trigger=AfterWatermark(
            late=AfterCount(1)
        ),
        accumulation_mode=AccumulationMode.DISCARDING,
    )
    | "Sum" >> beam.CombinePerKey(sum)
)
```

## Tests sind der beste Freund

Der DirectRunner macht Unit-Tests für Pipelines trivial. Ich schrieb Tests für jede Transformation. Wenn ein Produktionsjob in der Skalierung versagte, lag der Fehler fast immer in der Business-Logik, die ein Test abgedeckt hätte — nicht im Framework.

## Das Fazit

Beam belohnt Geduld. Die Abstraktionen sind wirklich elegant, sobald man aufhört, gegen sie anzukämpfen. Wenn Sie Datenpipelines bauen, die auf Petabytes skalieren und auf verwalteter Infrastruktur laufen müssen, ist die Investition es wert.
