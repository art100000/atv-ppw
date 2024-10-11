# 1 Soma de matrizes 3x3
matrizA = [
    [3, 5, 7],
    [1, 4, 6],
    [9, 2, 8]
]

matrizB = [
    [6, 3, 1],
    [7, 2, 0],
    [5, 8, 4]
]

def somar_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(3):  
        linha = []
        for a in range(3):  
            linha.append(matriz1[l][a] + matriz2[l][a])
        resultado.append(linha)

    return resultado

matriz_resultado = somar_matrizes(matrizA, matrizB)

for linha in matriz_resultado:
    print(linha)

#2 Soma de matrizes 2x3
matrizC = [
    [2, 3, 4],
    [5, 6, 7]
]

matrizD = [
    [8, 7, 6],
    [5, 4, 3]
]

def somar_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(2):  
        linha = []
        for a in range(3):  
            linha.append(matriz1[l][a] + matriz2[l][a])
        resultado.append(linha)

    return resultado

matriz_resultado = somar_matrizes(matrizC, matrizD)

for linha in matriz_resultado:
    print(linha)

#3 Soma de matrizes 2x2
matrizE = [
    [4, 9],
    [3, 2]
]

matrizF = [
    [1, 5],
    [6, 8]
]

def somar_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(2):
        linha = []
        for a in range(2):
            linha.append(matriz1[l][a] + matriz2[l][a])
        resultado.append(linha)

    return resultado

matriz_resultado = somar_matrizes(matrizE, matrizF)

for linha in matriz_resultado:
    print(linha)

#4 Subtração de matrizes
matrizG = [
    [9, 4, 5],
    [3, 8, 2],
    [6, 1, 7]
]

matrizH = [
    [3, 1, 2],
    [6, 5, 4],
    [8, 2, 9]
]

def subtrair_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(3):
        linha = []
        for a in range(3):
            linha.append(matriz1[l][a] - matriz2[l][a])
        resultado.append(linha)

    return resultado

matriz_resultado = subtrair_matrizes(matrizG, matrizH)

for linha in matriz_resultado:
    print(linha)

#5 Subtração de matrizes 2x3
matrizI = [
    [7, 9, 2],
    [4, 5, 6]
]

matrizJ = [
    [2, 3, 5],
    [8, 7, 1]
]

def subtrair_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(2):
        linha = []
        for a in range(3):
            linha.append(matriz1[l][a] - matriz2[l][a])
        resultado.append(linha)

    return resultado

matriz_resultado = subtrair_matrizes(matrizI, matrizJ)

for linha in matriz_resultado:
    print(linha)

#6 Subitração de matrizes 2x2
matrizK = [
    [6, 8],
    [4, 7]
]

matrizL = [
    [3, 2],
    [5, 1]
]


def subtrair_matrizes(matriz1, matriz2):
    resultado = []

    for l in range(2):
        linha = []
        for a in range(2):
            linha.append(matriz1[l][a] - matriz2[l][a])
        resultado.append(linha)

    return resultado


matriz_resultado = subtrair_matrizes(matrizK, matrizL)


for linha in matriz_resultado:
    print(linha)

#7 multiplicação de matrizes 2x2
matrizM = [
    [1, 2],
    [3, 4]
]

matrizN = [
    [2, 0],
    [1, 3]
]

def multiplicar_matrizes(matriz1, matriz2):
    resultado = [[0, 0], [0, 0]]

    for l in range(2):
        for a in range(2):
            for k in range(2):
                resultado[l][a] += matriz1[l][k] * matriz2[k][a]

    return resultado

matriz_resultado = multiplicar_matrizes(matrizM, matrizN)

for linha in matriz_resultado:
    print(linha)

#8 multiplicação de matrizes 2x3 por 3x2
matrizO = [
    [2, 3, 1],
    [4, 0, 5]
]

matrizP = [
    [1, 2],
    [3, 4],
    [5, 6]
]

def multiplicar_matrizes(matriz1, matriz2):
    resultado = [[0, 0], [0, 0]]  

    for l in range(2):
        for a in range(2):
            for k in range(3):
                resultado[l][a] += matriz1[l][k] * matriz2[k][a]

    return resultado

matriz_resultado = multiplicar_matrizes(matrizO, matrizP)

for linha in matriz_resultado:
    print(linha)

#9 Multiplicação por escalar 3x3
matrizQ = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

k = 3

def multiplicar_por_escalar(matriz, escalar):
    resultado = []

    for l in range(3):
        linha = []
        for a in range(3):
            linha.append(matriz[l][a] * escalar)
        resultado.append(linha)

    return resultado

matriz_resultado = multiplicar_por_escalar(matrizQ, k)

for linha in matriz_resultado:
    print(linha)

#10 Multiplicação por escalar 2x2
matrizR = [
    [2, 1],
    [0, 3]
]

k = 4

def multiplicar_por_escalar(matriz, escalar):
    resultado = []

    for l in range(2):
        linha = []
        for a in range(2):
            linha.append(matriz[l][a] * escalar)
        resultado.append(linha)

    return resultado

matriz_resultado = multiplicar_por_escalar(matrizR, k)

for linha in matriz_resultado:
    print(linha)








