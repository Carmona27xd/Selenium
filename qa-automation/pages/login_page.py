from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.url = "http://localhost:3000" 
        self.wait = WebDriverWait(driver, 10) 

        self.username_input = (By.CSS_SELECTOR, "[data-testid='username-input']")
        self.password_input = (By.CSS_SELECTOR, "[data-testid='password-input']")
        self.login_button = (By.CSS_SELECTOR, "[data-testid='login-button']")
        self.error_message = (By.CSS_SELECTOR, "[data-testid='login-error-message']")

    def load(self):
        self.driver.get(self.url)

    def login(self, username, password):
        self.wait.until(EC.visibility_of_element_located(self.username_input)).send_keys(username)
        self.wait.until(EC.visibility_of_element_located(self.password_input)).send_keys(password)
        self.wait.until(EC.element_to_be_clickable(self.login_button)).click()

    def get_error_message(self):
        return self.wait.until(EC.visibility_of_element_located(self.error_message)).text