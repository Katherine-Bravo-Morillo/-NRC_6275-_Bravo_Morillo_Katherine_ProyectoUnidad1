#importamos la libreria Flask
from flask import Flask, render_template

app = Flask(__name__, template_folder='template')

#---------------------------------------
#Ruta de pagina Login
#---------------------------------------


@app.route('/')
def Login():
    return render_template('/Login.html')


#---------------------------------------
#Ruta de pagina Inicio Seccion
#---------------------------------------
@app.route('/inicioSeccion')
def inicioSeccion():
    return render_template('/inicioSeccion.html')

#---------------------------------------
#Ruta de pagina lugares Turisticos
#---------------------------------------


@app.route('/lugaresTuristicos')
def lugaresTuristicos():
    return render_template('/lugaresTuristicos.html')


#---------------------------------------
#Ruta de pagina Sitios Obsevatorios
#---------------------------------------
@app.route('/SitiosObservatorios')
def SitiosObservatorios():
    return render_template('/SitiosObservatorios.html')

#---------------------------------------
#Ruta de pagina playasEcuador
#---------------------------------------


@app.route('/playasEcuador')
def playasEcuador():
    return render_template('/playasEcuador.html')

#---------------------------------------
#Ruta de pagina Islas Galapagos
#---------------------------------------


@app.route('/IslaGalapagos')
def IslaGalapagos():
    return render_template('/IslaGalapagos.html')


#---------------------------------------
#Ruta de pagina montañita
#---------------------------------------
@app.route('/montañita')
def montañita():
    return render_template('/montañita.html')


#---------------------------------------
#Ruta de pagina Gastronomia
#---------------------------------------
@app.route('/Gastronomia')
def Gastronomia():
    return render_template('/Gastronomia.html')

#---------------------------------------
#Ruta de pagina block informativo
#---------------------------------------


@app.route('/Bloc_Informativo')
def Bloc_Informativo():
    return render_template('/Bloc_Informativo.html')

#---------------------------------------
#Ruta de pagina contacto
#---------------------------------------


@app.route('/Contactos')
def Contactos():
    return render_template('/Contactos.html')


#---------------------------------------
#iniciamos la aplicacion
if __name__ == '__main__':
    app.run(debug=True)
