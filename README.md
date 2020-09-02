# Trabajo de Fin de Grado: *Título*

**Este sería el README de tu proyecto. Consulta las [instrucciones de
instalación](INSTALL.md)

### Autor(a): Nombre
### Tutor(a)(es): Nombre(s)
___

La documentación de este proyecto está realizada con `LaTeX`, por lo
tanto para generar el archivo PDF necesitaremos instalar `TeXLive` en
nuestra distribución.

Una vez instalada, tan solo deberemos situarnos en el directorio `doc` y ejecutar:

`
$ pdflatex proyecto.tex
`

Seguido por

    bibtex proyecto
    
y de nuevo

    pdflatex proyecto.tex

O directamente

    make
    
(que habrá que editar si el nombre del archivo del proyecto cambia)

# INSTRUCCIONES

Lee [INSTALL.md](INSTALL.md) para las instrucciones de uso.
