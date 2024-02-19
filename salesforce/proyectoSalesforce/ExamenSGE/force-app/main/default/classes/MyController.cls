public with sharing class MyController {
    @AuraEnabled
    public static void saveListsToDatabase(List<List<Integer>> lists) {
        List<NumberList__c> numberLists = new List<NumberList__c>();
        for (List<Integer> lists : lists) {
            NumberList__c numberList = new NumberList__c();
            // Configurar los campos de numberList según sea necesario
            numberLists.add(numberList);
        }
        insert numberLists;
    }

    @AuraEnabled
    public static List<NumberList__c> getSavedLists() { // Este método devuelve una lista de objetos 'NumberList__c'
        return [SELECT Id, (SELECT Number__c FROM ListItems__r) FROM NumberList__c];
    }
}