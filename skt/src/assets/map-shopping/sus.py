import os

# Defina o caminho da pasta com as imagens
dir_path = os.path.dirname(os.path.realpath(__file__))
path_1 = "entry-4"
path = os.path.join(dir_path, path_1)

# Percorra todos os arquivos na pasta
for filename in os.listdir(path):
    # Verifique se o arquivo é uma imagem
    if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
        # Renomeie o arquivo com o novo nome
        os.rename(os.path.join(path, filename), os.path.join(path, "entry4-" + filename))