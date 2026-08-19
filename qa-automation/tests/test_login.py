import pytest
from selenium import webdriver
from pages.login_page import LoginPage

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    driver.maximize_window()
    yield driver
    driver.quit()

def test_successful_login(driver):
    #Arranque
    login_page = LoginPage(driver)
    login_page.load()

    #Accion de login
    login_page.login("admin_farmacia", "Password123!")

    #Assert 
    assert "dashboard" in driver.current_url.lower(), "Fallo de la prueba, no se redirigio a el dashboard."
