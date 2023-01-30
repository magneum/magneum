import matplotlib
from randimage import get_random_image, show_array
img_size = (500, 500)
img = get_random_image(img_size)
show_array(img)
matplotlib.image.imsave("randimage.png", img)
