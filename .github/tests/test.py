from seleniumbase import BaseCase
import os

#url = "file:" + os.path.abspath('../../wwwroot/index.html')
url = "file:/home/runner/work/frisor-cleopatra/frisor-cleopatra/wwwroot/index.html"

class testPostnummer(BaseCase):
    def test_start(self):
        self.open(url)


        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "98139")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har hemkörning till dig!", "#postalNumberMessage")
        
        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "12395")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har inte hemkörning till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "dasdw")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Du får bara använda siffror i fältet.", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "318749817897218930")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har inte hemkörning till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "9 81 4 2")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har hemkörning till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "98-142")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Du får bara använda siffror i fältet.", "#postalNumberMessage")

class testStangdaDagLista(BaseCase):
    def test_start(self):
        self.open(url)

        self.execute_script("_Date = Date; Date = function() {return new _Date('Fri Sep 17 2021 00:00:00 GMT+0000 (UTC)')}; updateClosedDayList();")
        self.assert_text("Julafton", "#dayLi1")
