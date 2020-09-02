
all: pdf

pdf: %.pdf: %.tex %.bib
	pdflatex proyecto.tex && bibtex proyecto && pdflatex proyecto.tex && pdflatex proyecto.tex
