from seleniumbase import BaseCase
import os

#url = "file:" + os.path.abspath('../../wwwroot/index.html')
startPage = "file:/home/runner/work/frisor-cleopatra/frisor-cleopatra/swedish/index.html"
hittaHit = "file:/home/runner/work/frisor-cleopatra/frisor-cleopatra/swedish/hitta-hit.html"
varaFrisorer = "file:/home/runner/work/frisor-cleopatra/frisor-cleopatra/swedish/vara-frisorer.html"

class testPostnummer(BaseCase):
    def test_start(self):
        self.open(startPage)


        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "98139")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har hembesök till dig!", "#postalNumberMessage")
        
        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "12395")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har inte hembesök till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "dasdw")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Du får bara använda siffror i fältet.", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "318749817897218930")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har inte hembesök till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "9 81 4 2")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Vi har hembesök till dig!", "#postalNumberMessage")

        # Type/update text in text fields on the page
        self.type("#inputPostalNumber", "98-142")
        # Verify that a button click changes text on the page
        self.click("#submitButton")
        self.assert_text("Du får bara använda siffror i fältet.", "#postalNumberMessage")

class testStangdaDagLista(BaseCase):
    def test_start2(self):
        self.open(hittaHit)

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


class textAssertsStartPage(BaseCase):
    def test_start3(self):
        self.open(startPage)
        self.assert_text("Frisör Cleopatra", "body")
        self.assert_text("Fjällgatan 32H", "footer")
        self.assert_text("981 39 Kiruna", "footer")
        self.assert_text("info@ntig-uppsala.github.io", "footer")
        self.assert_text("063-055 55 55", "footer")
        self.assert_text("Långt hår", "body")
        self.assert_text("Kort hår", "body")
        self.assert_text("Färgning", "body")
        self.assert_text("Skägg", "body")
        self.assert_text("Toppning", "body")
        self.assert_text("Extensions kort", "body")
        self.assert_text("Extensions normal", "body")
        self.assert_text("Extensions lång", "body")
        self.assert_text("Långt hår stamkund", "body")
        self.assert_text("Kort hår stamkund", "body")
        self.assert_text("Hembesök", "body")

class textAssertsHittaHit(BaseCase):
    def test_start4(self):
        self.open(hittaHit)
        self.assert_text("Nyårsdagen", "body")
        self.assert_text("Trettondedag", "body")
        self.assert_text("Första maj", "body")
        self.assert_text("Sveriges nationaldag", "body")
        self.assert_text("Julafton", "body")
        self.assert_text("Juldagen", "body")
        self.assert_text("Annandag jul", "body")
        self.assert_text("Nyårsafton", "body")

class textAssertsVaraFrisorer(BaseCase):
    def test_start5(self):
        self.open(varaFrisorer)
        self.assert_text("Fredrik Örtqvist", "body")
        self.assert_text("Anna Pettersson", "body")
        self.assert_text("Örjan Johansson", "body")
