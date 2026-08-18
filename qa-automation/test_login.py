import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

logging.basicConfig(
    filename='pruebas_ui.log',       
    level=logging.INFO,              
    format='%(asctime)s - %(levelname)s - %(message)s', 
    encoding='utf-8'                 
)

def test_login_pharmacy():
    logging.info("Iniciando prueba de logIn de farmacia")
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:3000")
        driver.maximize_window()

        wait = WebDriverWait(driver, 10)
        wait.until(EC.presence_of_element_located(By.CSS_SELECTOR, '[data-testid="login-window"]'))
        logging.info("Pagina de logIn cargada en el DOM")
        
        input_user = driver.find_element(By.CSS_SELECTOR, '[input-username]')
        input_password = driver.find_element(By.CSS_SELECTOR, '[input-password]')
        login_button = driver.find_element(By.CSS_SELECTOR, '[btn-acceder]')
        
        logging.info("Ingresando usuario")
        input_user.send_keys("administrador")
        time.sleep(1)
        
        logging.info("Ingresando password")
        input_password.send_keys("Password123!")
        time.sleep(1)
        
        logging.info("Click boton acceder")
        login_button.click()
        time.sleep(2)
        logging.info("Prueba de logIn completada")

    except Exception as e:
        logging.error("La prueba fallo {str(e)}")

    finally:
        logging.info("Liberando recursos")
        logging.info("-" * 50)
        driver.quit()

    if __name__ == "__main__":
        test_login_pharmacy()