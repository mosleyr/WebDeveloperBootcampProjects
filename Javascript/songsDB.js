var songs = [
    {
        title: "Blowin' in the Wind",
        license: "Special Rider",
        contacted: false
    },
    {
        title: "500 Miles",
        license: "Warner Chappell",
        contacted: true
    },
    {
        title: "All My Trials",
        license: "Warner Chappell",
        contacted: true
    }
]

function buildFeedback(songInfo) {
    var result = "You have ";
    if(songInfo.contacted) {
        result += "contacted ";
    } else {
        result += "not contacted ";
    }
    result += songInfo.license + " regarding " + songInfo.title;
    return result;
}

songs.forEach(function(songInfo){
    console.log(buildFeedback(songInfo));
})

