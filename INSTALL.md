# Instrucciones de uso

*Nota*: borra este fichero después de la *instalación*

Para crear un repositorio para tu TFG libre (lo que es conveniente que
hagas en cualquier
caso,
[lee aquí](https://medium.com/@jjmerelo/por-qu%C3%A9-c%C3%B3mo-cuando-y-d%C3%B3nde-debes-liberar-tu-trabajo-fin-de-grado-m%C3%A1ster-tesis-bb0393a235b1)),
sigue las siguientes instrucciones.

1. Simplemente pulsa en "Use this template" para crear un repositorio
   con este contenido con tu usuario, que luego podrás
   editar. Alternativamente, puedes hacer:
   1. Crea un repositorio vacío en GitHub o GitLab.
   2. Localmente, haz lo siguiente, creando una "copia somera" del
   repositorio plantilla

    git clone --depth=1 https://github.com/JJ/plantilla-TFG-ETSIIT.git

   3. Cambia al directorio del repo y borra la historia de este repo y súbelo al tuyo
   rm -rf .git
   git remote add origin mi-repo-en-git(hub|lab)
   git commit -am "Commit inicial desde plantilla"
   git push -u origin master
   
   4. Puedes evitar la creación de un repo git simplemente descargándotelo
   de
   [las releases](https://github.com/JJ/plantilla-TFG-ETSIIT/releases)
   del repo, evitando los pasos `git clone` y `rm -rf .git`.

3. Cuando quieras, edita los nombres en los sitios correspondientes.
4. En cualquier
   momento,
   [añade tu repo a a lista de TFs libres en la UGR](https://github.com/JJ/TF-libres-UGR/).
5. Borra este fichero cuando ya lo tengas todo.

A partir de ahí, ya puedes trabajar con tu repo de la forma habitual.

Este repositorio incluye lo siguiente

1. [Licencia GPL](LICENSE), una licencia libre que es imprescindible
   para que el trabajo sea considerado tal. Puedes cambiarla si lo
   deseas, pero esta es la que yo aconsejo.
1. Plantilla para la memoria LaTeX en el directorio [doc](doc).
2. Un ejemplo de clase en Node, con fichero de test. Los tests son
   imprescindibles en un trabajo, pues son la medida de su calidad.
3. Ficheros auxiliares de ejemplo: configuración
   de [Travis](https://travis-ci.org), [.gitignore](.gitignore) que
   incluye tanto node como LaTeX
