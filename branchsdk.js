// load Branch
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
// init Branch

var options = { no_journeys: false };

//If in case we need to add functionality after initialization.
branch.init('key_live_phPajvOnVBo9r38HkfR40ogfyuovtPKG',options , function(err, data) {
    console.log(err, data);

    var linkData = {
        campaign: 'content 123',
        channel: 'facebook',
        feature: 'dashboard',
        stage: 'new user',
        tags: [ 'tag1', 'tag2', 'tag3' ],
        alias: '',
        data: {
            'custom_bool': true,
            'custom_int': Date.now(),
            'custom_string': 'hello',
            '$og_title': 'Title',
        }
    };

    branch.link(linkData, function(err, link) {
        // bind elements
        document.getElementById('button').onclick = function() {
            window.open(link || err);
        };
        document.getElementById('anchor').href = link || err;
    });

    branch.setBranchViewData(linkData);
});

