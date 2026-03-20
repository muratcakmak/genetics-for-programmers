# Genetics for Programmers

**Live site: [genetics.omc345.com](http://genetics.omc345.com/)**

> A curated learning roadmap for software engineers who want to understand genetics, CRISPR, AlphaFold, and mRNA vaccine design — from zero biology background to computational biology.

Inspired by [the story of Paul Conyngham](https://www.the-scientist.com/chatgpt-and-alphafold-help-design-personalized-vaccine-for-dog-with-cancer-72771), a tech entrepreneur with no biology background who used ChatGPT, AlphaFold, and computational tools to design a personalized mRNA cancer vaccine for his dog Rosie.

---

## Table of Contents

- [Learning Roadmap](#learning-roadmap)
- [Phase 1: Biology Foundations](#phase-1-biology-foundations)
- [Phase 2: Genetics & Genomics](#phase-2-genetics--genomics)
- [Phase 3: Bioinformatics Programming](#phase-3-bioinformatics-programming--tools)
- [Phase 4: CRISPR Gene Editing](#phase-4-crispr-gene-editing)
- [Phase 5: AlphaFold & Protein Structure](#phase-5-alphafold--protein-structure-prediction)
- [Phase 6: mRNA Vaccine Design](#phase-6-mrna-vaccine-design--neoantigen-prediction)
- [Quick Reference Tables](#quick-reference-all-resources-by-type)
- [Community Advice](#key-community-advice)
- [Progress Checkpoints](#how-to-know-youre-making-progress)

---

## Learning Roadmap

```
Month 1-2: Biology Foundations
├── Khan Academy Biology (cell biology, molecular biology)
├── MIT 7.00x or learngenomics.dev
├── Read "The Gene" by Mukherjee (for motivation/context)
└── Start Rosalind.info problems (combines coding + bio)

Month 2-3: Genetics & Genomics
├── "Molecular Biology of the Cell" (key chapters)
├── Coursera "Biology Meets Programming"
├── Learn about DNA sequencing, mutations, gene expression
└── "Bioinformatics Algorithms" by Compeau & Pevzner

Month 3-4: Bioinformatics Programming
├── Biopython tutorials
├── "Bioinformatics Data Skills" by Buffalo
├── Set up genomics tools (BLAST, samtools, bcftools)
├── NCBI, Ensembl, UCSC Genome Browser exploration
└── Run a simple variant calling pipeline

Month 4-5: CRISPR
├── "A Crack in Creation" by Doudna
├── Addgene CRISPR guide
├── Explore awesome-CRISPR GitHub tools
└── Try designing gRNAs with CRISPick or CRISPOR

Month 5-6: Protein Structure & AlphaFold
├── Learn protein structure basics (PDB, amino acids)
├── EMBL-EBI AlphaFold tutorial
├── Run predictions on AlphaFold Server or ColabFold
└── Visualize results in PyMOL

Month 6-8: Immunology & Vaccine Design
├── Khan Academy Immunology
├── Learn MHC/HLA antigen presentation
├── Explore IEDB, NetMHCpan, OpenVax pipeline
├── Read the PGV-001 computational pipeline paper
└── Understand the full neoantigen → mRNA vaccine workflow
```

---

## Phase 1: Biology Foundations

> Start here if you have zero biology background.

### Courses (Free)

| Course | Platform | Notes |
|--------|----------|-------|
| [MIT 7.00x Introduction to Biology](https://www.edx.org/course/introduction-to-biology-the-secret-of-life) | edX | Universally praised by programmers entering biology |
| [Khan Academy Biology](https://www.khanacademy.org/science/biology) | Khan Academy | Cell biology, molecular biology, genetics fundamentals |
| [learngenomics.dev](https://learngenomics.dev/) | Web | Built specifically for CS backgrounds entering genomics |

### Books

| Book | Author | Why Read It |
|------|--------|-------------|
| *Molecular Biology of the Cell* | Alberts et al | #1 recommended for CS people entering biology. Works from basics to complex |
| *Campbell Biology* | Urry et al | Solid undergraduate-level foundation |
| *New Biology for Engineers and Computer Scientists* | Dill | Written specifically for the technical audience |
| *The Gene: An Intimate History* | Siddhartha Mukherjee | Engaging, non-textbook introduction to genetics |
| *Life's Greatest Secret* | Matthew Cobb | History of cracking the genetic code |

### YouTube

- [Shomu's Biology](https://www.youtube.com/user/shoabordi) — Molecular biology concepts
- [Khan Academy](https://www.khanacademy.org/science/biology) — Visual explanations of cell biology and genetics

---

## Phase 2: Genetics & Genomics

### Courses

| Course | Platform | Notes |
|--------|----------|-------|
| [Biology Meets Programming: Bioinformatics for Beginners](https://www.coursera.org/learn/bioinformatics) | Coursera | Combines programming with bioinformatics. Highly recommended |
| [Python for Genomic Data Science](https://www.coursera.org/learn/python-genomics) | Coursera | Practical genomics with Python |
| [Computational Genomics with R](https://compgenomr.github.io/book/) | Free Book | Practical R applications in genomics |

### Books

| Book | Author | Why Read It |
|------|--------|-------------|
| *Bioinformatics and Functional Genomics* | Jonathan Pevsner | Top-rated for bridging biology and computation |
| *Introduction to Genetic Analysis* | Wessler, Doebley, Carroll | Genetics degree-level knowledge |
| *Bioinformatics Algorithms* | Compeau & Pevzner | Excellent for CS people. Genome assembly, alignment, phylogenetics |
| *Biological Sequence Analysis* | Durbin et al | Classic algorithms book, approachable |
| *Genomes 3* | Brown | Comprehensive genomics textbook |

### Key Concepts to Learn

- DNA replication, transcription, translation
- Gene expression and regulation
- Mutations, SNPs, and variant calling
- Genome sequencing (WGS, WES, RNA-seq)
- Neoantigens and tumor mutations (critical for the vaccine pipeline)

---

## Phase 3: Bioinformatics Programming & Tools

### Learning Path

> Based on ["How I Would Learn Bioinformatics From Scratch 12 Years Later"](https://divingintogeneticsandgenomics.com/post/bioinfo-roadmap/)

1. **Master Linux command line** — [Software Carpentry Unix Shell](https://www.youtube.com/watch?v=U3iNcBtycaQ&list=PLA86D04D6E0BFD2E0), [sandbox.bio](https://sandbox.bio/)
2. **Learn R for genomics** — [R for Data Science](https://r4ds.had.co.nz/), [Data Analysis for the Life Sciences with R](https://www.crcpress.com/Data-Analysis-for-the-Life-Sciences-with-R/Irizarry-Love/p/book/9781498775670)
3. **Build statistical foundation** — [Modern Statistics for Modern Biology](https://www.huber.embl.de/msmb/), [StatQuest](https://statquest.org/video-index/)
4. **Linear algebra** — [3Blue1Brown](https://www.3blue1brown.com/), [MIT 18.06](https://web.mit.edu/18.06/www/)
5. **Machine learning** — [An Introduction to Statistical Learning](https://www.statlearning.com/), StatQuest ML videos
6. **Python for bioinformatics** — *Mastering Python for Bioinformatics* (O'Reilly), *Python for Biologists*

### Essential Python Libraries

| Library | Purpose |
|---------|---------|
| [Biopython](https://biopython.org/) | Sequence analysis, file parsing, BLAST |
| [scikit-bio](http://scikit-bio.org/) | Bioinformatics algorithms |
| pandas / numpy | Data manipulation |
| [PyMOL](https://pymol.org/) | Protein structure visualization |
| [Nextflow](https://www.nextflow.io/) / [Snakemake](https://snakemake.readthedocs.io/) | Genomics pipeline workflow managers |

### Hands-On Practice

| Platform | Description |
|----------|-------------|
| [Rosalind.info](https://rosalind.info/) | Bioinformatics coding challenges — learn by solving problems |
| [sandbox.bio](https://sandbox.bio/) | Browser-based bioinformatics command-line practice |
| [Galaxy Project](https://usegalaxy.org/) | Web-based genomics analysis platform |
| [bioinformaticsdotca](https://bioinformaticsdotca.github.io/) | Conference tutorials + GitHub materials |

### Must-Read Books

| Book | Author | Why |
|------|--------|-----|
| *Bioinformatics Data Skills* | Vince Buffalo | Must-have. Covers Unix, R, Python |
| *Mastering Python for Bioinformatics* | Ken Youens-Clark | Hands-on Python projects |

### Key Databases

| Database | URL | Purpose |
|----------|-----|---------|
| NCBI | [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/) | GenBank, PubMed, BLAST |
| Ensembl | [ensembl.org](https://www.ensembl.org/) | Genome browser and annotation |
| UCSC Genome Browser | [genome.ucsc.edu](https://genome.ucsc.edu/) | Genome visualization |
| UniProt | [uniprot.org](https://www.uniprot.org/) | Protein sequences and function |
| PDB | [rcsb.org](https://www.rcsb.org/) | Protein Data Bank, 3D structures |

### YouTube Channels

| Channel | Focus |
|---------|-------|
| [StatQuest](https://statquest.org/) (Josh Starmer) | Statistics, ML, PCA — essential |
| [3Blue1Brown](https://www.3blue1brown.com/) | Linear algebra visualizations |
| [Danny Arends](https://www.youtube.com/c/DannyArends) | 50-hr bioinformatics intro course |
| [bioinformaticsdotca](https://www.youtube.com/@bioinformaticsdotca) | Conference tutorials |
| [OMGenomics](https://www.youtube.com/@OMGenomics) | Bioinformatics tutorials |
| [Chatomics](https://www.youtube.com/@chatomics) | Bioinformatics learning |
| [Shomu's Biology](https://www.youtube.com/user/shoabordi) | Molecular biology concepts |

---

## Phase 4: CRISPR Gene Editing

### Introductory Resources

| Resource | Type | Notes |
|----------|------|-------|
| *A Crack in Creation* — Jennifer Doudna & Samuel Sternberg | Book | The definitive intro, by the Nobel Prize-winning co-discoverer of CRISPR |
| [Addgene CRISPR Guide](https://blog.addgene.org/how-to-design-your-grna-for-crispr-genome-editing) | Web | Comprehensive beginner guide to CRISPR and gRNA design |
| [SnapGene CRISPR Guide](https://www.snapgene.com/guides/design-grna-for-crispr) | Web | From gRNA design to verifying genome edits |

### Computational CRISPR Tools

| Tool | Description |
|------|-------------|
| [awesome-CRISPR](https://github.com/davidliwei/awesome-crispr) | Curated list of 100+ CRISPR tools, databases, and papers |
| [CRISPick](https://portals.broadinstitute.org/gppx/crispick/public) (Broad Institute) | Top-rated for designing CRISPRko/a/i sgRNAs |
| [CRISPOR](http://crispor.tefor.net/) | Design, evaluate, and clone guide sequences |
| [CHOPCHOPv3](https://chopchop.cbu.uib.no/) | Web tool for selecting CRISPR target sites |
| [Synthego Design Tool](https://www.synthego.com/guide/how-to-use-crispr/design-tool-tutorial/) | Free gRNA design with built-in algorithms |
| [crisprVerse](https://github.com/crisprVerse) | Comprehensive R/Bioconductor ecosystem for CRISPR guide RNA design |

### ML & CRISPR

| Resource | Type |
|----------|------|
| [Machine-Learning-Based CRISPR Guide Design](https://www.broadinstitute.org/videos/machine-learning-based-crispr-guide-design) (Broad Institute) | Video |
| [DeepCRISPR](https://github.com/bm2-lab/DeepCRISPR) | Deep learning for sgRNA on-target/off-target prediction |
| [The Bioinformatics of CRISPR gRNA Design](https://ardigen.com/the-bioinformatics-of-crispr-grna-design/) (Ardigen) | Best practices article |

### Key Papers

- Jinek et al. (2012) — Original CRISPR-Cas9 paper
- Hsu et al. (2014) — *Development and Applications of CRISPR-Cas9 for Genome Engineering* (Nature Reviews Genetics)

---

## Phase 5: AlphaFold & Protein Structure Prediction

### Prerequisites

- Basic understanding of amino acids, protein folding, and 3D structure
- ML/deep learning background

### Learning Resources

| Resource | Type | Notes |
|----------|------|-------|
| [EMBL-EBI AlphaFold Tutorial](https://www.ebi.ac.uk/training/online/courses/alphafold) | Course | Official step-by-step tutorial |
| [AlphaFold 3 Workshop for Beginners](https://www.youtube.com/watch?v=hJCAqh_DVFI) | Video | Beginner video walkthrough |
| [Your First Hands-On Lesson On Using AlphaFold](https://levelup.gitconnected.com/your-first-hands-on-lesson-on-using-alphafold-d558f4c4ed28) | Article | Practical tutorial with code |
| [Protein Structure Prediction: A Beginner's Guide](https://bitesizebio.com/74900/protein-structure-prediction/) | Article | Overview of methods including AlphaFold |

### Tools & Platforms

| Tool | Description |
|------|-------------|
| [AlphaFold Server](https://alphafoldserver.com/) | Run predictions directly (free for academic use) |
| [AlphaFold DB](https://alphafold.ebi.ac.uk/) | Pre-computed predictions for 200M+ proteins |
| [ColabFold](https://github.com/sokrypton/ColabFold) | Run AlphaFold on Google Colab (free GPU) |
| [PyMOL](https://pymol.org/) | Visualize and analyze predicted structures |
| [RoseTTAFold](https://robetta.bakerlab.org/) | Alternative structure prediction (UW) |

### Key Papers

- Jumper et al. (2021) — *Highly accurate protein structure prediction with AlphaFold* (Nature)
- Abramson et al. (2024) — AlphaFold 3: protein-ligand interactions

---

## Phase 6: mRNA Vaccine Design & Neoantigen Prediction

### Immunology Foundations

| Resource | Platform | Notes |
|----------|----------|-------|
| [Khan Academy Immunology](https://www.khanacademy.org/science/biology/human-biology/immunology) | Khan Academy | Immune system, antigens, antibodies |
| MIT OCW Immunology | MIT | More rigorous course |
| MHC/HLA antigen presentation | Concept | Critical for neoantigen prediction |

### The Computational Vaccine Pipeline

> This is what Paul Conyngham did to create Rosie's vaccine:

```
1. Tumor DNA Sequencing
   └── Whole genome/exome sequencing of tumor vs normal tissue

2. Variant Calling
   └── Identify somatic mutations (GATK, Mutect2, Strelka)

3. Neoantigen Prediction
   └── Predict which mutated peptides will be presented by MHC molecules

4. Protein Structure Prediction
   └── Use AlphaFold to predict neoantigen structures

5. mRNA Vaccine Design
   └── Design mRNA encoding selected neoantigens

6. Lipid Nanoparticle (LNP) Formulation
   └── Package mRNA for delivery
```

### Computational Tools for Neoantigen Prediction

| Tool | Description |
|------|-------------|
| [IEDB](https://www.iedb.org/) | Immune Epitope Database — essential for epitope prediction |
| [NetMHCpan](https://services.healthtech.dtu.dk/services/NetMHCpan-4.1/) | MHC-peptide binding prediction (gold standard) |
| [OpenVax](https://github.com/openvax) | Open-source neoantigen vaccine pipeline |
| [Vaxrank](https://github.com/openvax/vaxrank) | Ranks neoantigens for vaccine inclusion |
| [pVACtools](https://pvactools.readthedocs.io/) | Personalized variant antigens by cancer tools |
| [NeoAgDT](https://academic.oup.com/bioinformatics/article/40/5/btae205/7645414) | Neoantigen digital twin optimization |
| [ImmunoNX](https://pmc.ncbi.nlm.nih.gov/articles/PMC12709488/) | Clinical neoantigen workflow pipeline |

### Key Papers & Resources

| Paper | Link | What You'll Learn |
|-------|------|-------------------|
| Computational Pipeline for PGV-001 Neoantigen Vaccine Trial | [PMC5778604](https://pmc.ncbi.nlm.nih.gov/articles/PMC5778604/) | Full sequencing-to-vaccine workflow |
| An AI-powered pipeline for personalized cancer vaccines | [Ludwig Cancer Research](https://www.ludwigcancerresearch.org/news-releases/an-ai-powered-pipeline-for-personalized-cancer-vaccines/) | End-to-end proteogenomic pipeline (NeoDisc) |
| Computational biology and AI in mRNA vaccine design | [PMC11788159](https://pmc.ncbi.nlm.nih.gov/articles/PMC11788159/) | Review of computational methods |
| Neoantigen mRNA Cancer Vaccines: Deep Learning | [IntechOpen](https://www.intechopen.com/chapters/1220147) | Convergence of mRNA + AI |
| SARS-CoV-2 mRNA vaccines sensitize tumors | [Grippin et al. 2025, Nature](https://www.nature.com/articles/s41586-025-08620-7) | mRNA vaccines + checkpoint blockade |

---

## Quick Reference: All Resources by Type

### Top 10 Books (Priority Order)

| # | Title | Author | Topic |
|---|-------|--------|-------|
| 1 | *The Gene: An Intimate History* | Mukherjee | Accessible genetics intro |
| 2 | *Molecular Biology of the Cell* | Alberts et al | Biology foundation |
| 3 | *Bioinformatics Algorithms* | Compeau & Pevzner | CS-friendly algorithms |
| 4 | *Bioinformatics Data Skills* | Vince Buffalo | Practical Unix/R/Python |
| 5 | *Bioinformatics & Functional Genomics* | Pevsner | Biology + computation bridge |
| 6 | *A Crack in Creation* | Doudna & Sternberg | CRISPR intro |
| 7 | *Mastering Python for Bioinformatics* | Youens-Clark | Hands-on Python |
| 8 | *An Introduction to Statistical Learning* | James et al | ML foundations |
| 9 | *Biological Sequence Analysis* | Durbin et al | Classic algorithms |
| 10 | *Modern Statistics for Modern Biology* | Huber & Holmes | Stats for biology |

### GitHub Repositories

| Repo | Description |
|------|-------------|
| [davidliwei/awesome-CRISPR](https://github.com/davidliwei/awesome-crispr) | 100+ curated CRISPR tools |
| [openvax/vaxrank](https://github.com/openvax/vaxrank) | Neoantigen vaccine ranking |
| [crisprVerse](https://github.com/crisprVerse) | R ecosystem for CRISPR |
| [deepmind/alphafold](https://github.com/google-deepmind/alphafold) | AlphaFold source code |
| [sokrypton/ColabFold](https://github.com/sokrypton/ColabFold) | AlphaFold on Google Colab |
| [bioinformaticsdotca](https://bioinformaticsdotca.github.io/) | Conference tutorial materials |

---

## Key Community Advice

> Compiled from r/bioinformatics, r/genetics, Biology Stack Exchange, and Biostars

- **Start with molecular biology, not genetics** — Molecular biology is broader and gives a more solid base
- **Prioritize Python, then R** — Both are essential; Python for automation/ML, R for genomics/statistics
- **Don't try to learn everything** — Focus on your target area (oncology/vaccine design)
- **Read papers from your field** — The field moves fast; textbooks give foundations, papers give current state
- **Rosalind.info** — Universally recommended as the best hands-on learning platform
- **"Bioinformatics Algorithms" by Compeau & Pevzner** — Consensus #1 book pick for CS people
- **The biology you need depends on what you want to do** — For oncology/vaccines: molecular biology → immunology → genomics

---

## How to Know You're Making Progress

| Phase | You Can... |
|-------|-----------|
| After Phase 1-2 | Explain DNA → RNA → Protein, describe mutations, understand genome sequencing workflows |
| After Phase 3 | Write Python to parse FASTA files, run BLAST, analyze variant calls |
| After Phase 4 | Design a CRISPR guide RNA for a target gene using computational tools |
| After Phase 5 | Input a protein sequence into AlphaFold and interpret the predicted structure |
| After Phase 6 | Describe the full tumor sequencing → neoantigen → mRNA vaccine pipeline and name tools for each step |

---

## Contributing

Found a great resource that's missing? Open a PR or issue.

## License

This resource guide is open source and available under the [MIT License](LICENSE).
