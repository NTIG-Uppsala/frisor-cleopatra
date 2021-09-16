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

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 11, 25, 3, 0, 0, 200)))")
        self.assert_text("Juldagen", "#dayLi1")

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 6, 7, 3, 0, 0, 200)))")
        self.assert_text("Julafton", "#dayLi1")

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 0, 1, 3, 0, 0, 200)))")
        self.assert_text("Nyårsdagen", "#dayLi1")

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 11, 31, 3, 0, 0, 200)))")
        self.assert_text("Nyårsafton", "#dayLi1")

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 3, 29, 3, 0, 0, 200)))")
        self.assert_text("Första maj", "#dayLi1")

        self.execute_script("updateClosedDayList(new Date(Date.UTC(2012, 0, 5, 3, 0, 0, 200)))")
        self.assert_text("Trettondedag", "#dayLi1")

