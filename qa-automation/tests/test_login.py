import pytest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from pages.login_page import LoginPage

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    driver.maximize_window()
    yield driver
    driver.quit()

def test_login_exitoso(driver):
    login_page = LoginPage(driver)
    login_page.load()
    
    # 1. Actuar
    login_page.login("admin_farmacia", "Password123!")
    
    # 2. Afirmar 
    WebDriverWait(driver, 10).until(EC.url_contains("/dashboard"))
    
    btn_ventas = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-testid='btn-ventas']"))
    )
    assert btn_ventas.is_displayed(), "El dashboard no cargó correctamente tras el login."

def test_login_fallido(driver):
    login_page = LoginPage(driver)
    login_page.load()
    
    login_page.login("hacker", "clave_incorrecta")
    
    error_text = login_page.get_error_message()
    assert "incorrectos" in error_text.lower(), "El mensaje de error no se mostró correctamente."