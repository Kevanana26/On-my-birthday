function shakeMagic8Ball() {
    const question = prompt('Enter a Decade and see wha thappened on my Birthday!!')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please enter a Decade, OR just kinda leave idk'
        document.getElementById('response-text').classList = 'display text-danger'
        document.getElementById('response-image').src = '#BADIMAGE' //fix this shit later//
        return
    }
    if (!question.trim()) {
        alert('Buddy, you gotta enter a decade to see what happens :)')
        return
    }
    const randomNumber = Math.floor(Math.random() * 6)
    let answer, Image, color;
    switch (randomNumber) {
        case 0:
            answer = "1911  The day after a bomb explodes prematurely, the Wuchang Uprising begins against the Chinese monarchy.  1913  U.S. President Woodrow Wilson triggers the explosion of the Gamboa Dike, completing major construction on the Panama Canal.  1918  RMS Leinster is torpedoed and sunk by UB-123, killing 564, the worst-ever on the Irish Sea.[4][5]"
            Image = "imgs/mario.gif"
            color = "text-success"
            break
        case 1:
            answer = "2010  The Netherlands Antilles are dissolved as a country.  2015  Twin bomb blasts in the Turkish capital Ankara kill 109 and injure 500+.   2018  Hurricane Michael makes landfall in the Florida Panhandle as a catastrophic Category 5 hurricane. It kills 57 people in the United States, 45 in Florida, and causes an estimated $25.1 billion in damage."
            Image = "imgs/No.jpg"
            color = "text-danger"
            break
        case 2:
            answer = "680  The Battle of Karbala marks the martyrdom of Husayn ibn Ali.  732  Charles Martel's forces defeat an Umayyad army near Tours, France.  1471  Sten Sture the Elder, the Regent of Sweden, with the help of farmers and miners, repels an attack by King Christian I of Denmark.  1492  The crew of Christopher Columbus's ship, the Santa Maria, attempt a mutiny.  1575  Roman Catholic forces under Henry I, Duke of Guise, defeat the Protestants, capturing Philippe de Mornay among others.  1580  Over 600 Papal troops land in Ireland to support the Second Desmond Rebellion."
            Image = "imgs/uncertain.gif"
            color = "text-primary"
            break
        case 3:
            answer = "1963  France cedes control of the Bizerte naval base to Tunisia.  1963  The Partial Nuclear Test Ban Treaty comes into effect.  1964  The Tokyo Summer Olympics opening ceremony is the first to be relayed live by satellites.  1967  The Outer Space Treaty comes into force.  1969  King Crimson releases their debut album, In the Court of the Crimson King."
            Image = "imgs/Kermit.jpg"
            color = "text-info"
            break
        case 4:
            answer = "1954  The Minister of Foreign Affairs of the Sultanate of Muscat, Neil Innes, sends a signal to the Sultanate's forces, accompanied with oil explorers, to penetrate Fahud, marking the beginning of Jebel Akhdar War. 1957  U.S. President Dwight D. Eisenhower apologizes to Ghanaian finance minister Komla Agbeli Gbedemah after he is refused service in a Delaware restaurant"
            Image = "imgs/idk.gif"
            color = "text-success"
            break
        case 5:
            answer = "1980  The 7.1 Mw El Asnam earthquake shakes northern Algeria, killing 2,633 and injuring 8,369.  1980  The Farabundo Martí National Liberation Front is founded in El Salvador.  1985  US Navy aircraft intercept an Egyptian airliner carrying the perpetrators of the Achille Lauro hijacking, and force it to land in Italy. 1986  A 5.7 Mw San Salvador earthquake shakes El Salvador, killing 1,500."
            Image = "imgs/SOL.gif"
            color = "text-danger"
            break
    }

    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('reponse-image').src = Image

}