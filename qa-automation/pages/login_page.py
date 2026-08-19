from selenium.webdriver.common.by import By

class LoginPage: 
    def __init__(self, driver):
        self.driver = driver
        self.url = "http://localhost:3000"

        self.username_input = (By.ID, "input-username")
        self.password_input = (By.ID, "input-password")
        self.login_button = (By.XPATH, "//button[@type='submit']")

        def load(self):
            self.driver.get(self.url)

        def login(self, username, password):
            self.driver.find_element(*self.username_input).send_keys(username)
            self.driver.find_element(*self.password_input).send_keys(password)
            self.driver.find_element(*self.login_button).click()

