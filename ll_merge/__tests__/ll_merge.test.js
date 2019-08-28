'use strict';
const list = require('/Users/tdogb/codefellows-401/401-Code-Challenges/ll_merge/ll_merge').LinkedList;
const mergeLists = require('/Users/tdogb/codefellows-401/401-Code-Challenges/ll_merge/ll_merge').mergeLinkedLists;

const testlist = new list();
const testlist2 = new list();

function setupTest() {
    //Add n elements to our testList [1, 2, 3, 4]
    testlist.insert(1);
    testlist.insert(2);
    testlist.insert(3);
    testlist.insert(4);
    testlist2.insert(5);
    testlist2.insert(6);
    testlist2.insert(7);
    testlist2.insert(8);
}

describe('testing function mergeLinkedList', ()  => {
    it('it should merge Linked list 2 into my first one', () => {
        setupTest();
        const newLinkedList = [1,5,2,6,3,7,4,8]
        mergeLists(testlist, testlist2);
        let current = testlist.head;
        for(let i = 0; i < newLinkedList.length; i++) {
            expect(current.value).toBe(newLinkedList[i]);
            current = current.next;
        }

    })
});
