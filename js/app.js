


var app = angular.module("myApp", ['ngStorage', 'ngAnimate', 'pascalprecht.translate']);
app.controller("myCtrl", function($scope, $http, $location, $timeout, $localStorage, $attrs, $translate){
  
    $scope.name = $localStorage.LocalMessage;
  
    var spl_href = window.location.href,
        split_href = spl_href.split("/"),
        come_back_href = split_href[split_href.length-1], 
        var_spl = split_href.indexOf(split_href[split_href.length-1]);
    if(window.location.hash){
        split_href.splice(-1, 1);
    }
    split_href[var_spl] = "index.html";
    var new_split = split_href.join("/");
    
   /* $scope.clear = function () {
        $localStorage.$reset()
    }*/
    if(window.location.search == "?=arm?=woman"){
        angular.element(document.querySelector(".bac_img")).attr("src", "img/background_woman.png");
        angular.element(document.querySelector(".logo_circle")).attr("src", "img/two_logo.png");
    }
     if(window.location.search == "?=eng?=woman"){
        angular.element(document.querySelector(".bac_img")).attr("src", "img/background_woman.png");
        angular.element(document.querySelector(".logo_circle")).attr("src", "img/one_logo.png");
    }
    if(window.location.search == "?=arm?=man"){
        angular.element(document.querySelector(".bac_img")).attr("src", "img/background_man.png");
        angular.element(document.querySelector(".logo_circle")).attr("src", "img/two_logo.png");
    }
    if(window.location.search == "?=eng?=man"){
        angular.element(document.querySelector(".bac_img")).attr("src", "img/background_man.png");
        angular.element(document.querySelector(".logo_circle")).attr("src", "img/one_logo.png");
    }
    
    var a = window.location.pathname,
        b = a.split("/"),
        c = b[b.length-1].replace("index.html", "lang.html"),
        d,
        e;
    
    $http.get("json/names.json").success(function(data){
       $scope.items_arr = data; 
    });
    
    $scope.dirOptions = {};
    $scope.dirOpt = {};
    $scope.dirOpt2 = {};
    $scope.dirOpt3 = {};
    $scope.dirOpt4 = {};
    $scope.friend_opt = {};
    $scope.best_players = {};
    
  var split_search = window.location.search.split("?");
  var lang_arm;
  split_search.map(function(num){
      if(num=="=arm"){   
          lang_arm = "json/harcer.json"
          $translate.use(num);
      }
      else if(num=="=eng"){
          lang_arm = "json/eng_harcer.json"
          $translate.use(num);
      }
  })
  this.clal = function(){
    var audio_begin = new Audio('play/skizb.mp3');
    audio_begin.play();
    angular.element(document.querySelector(".your_name")).removeClass("after_begin")
    var true_background = 0;
    this.close_begin = true;
    $scope.dirOptions.directiveFunction();
      this.background_true = function(){
          var el_lastByLast = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-true_background],
                elseLastByLast= angular.element(el_lastByLast).children(),
                atLastByLast = elseLastByLast[1].innerHTML;
          if(true_background <= 5){
              var elseLastChild = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-1],
                  elseLastSubChildFirst= angular.element(elseLastChild).children(),
                  atLast_ans = "0";
          }
          if(true_background > 5 && true_background <= 10){
              console.log(true_background)
              var elseLastChild = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-5],
                  elseLastSubChildFirst= angular.element(elseLastChild).children(),
                  atLast_ans = elseLastSubChildFirst[1].innerHTML;
          }
          if(true_background > 10 && true_background <= 15){
              var elseLastChild = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-10],
                  elseLastSubChildFirst= angular.element(elseLastChild).children(),
                  atLast_ans = elseLastSubChildFirst[1].innerHTML;
          }
          if(true_background == 15){
              var elseLastChild = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-15],
                  elseLastSubChildFirst= angular.element(elseLastChild).children(),
                  atLast_ans = elseLastSubChildFirst[1].innerHTML;
              angular.element(document.querySelector(".yourWin")).removeClass("win_money");
            var audio_end = new Audio('play/verj.mp3');
            audio_end.play();
              var wind_reload_win = function(){
                window.location.href = new_split;
              }
              $timeout(wind_reload_win, 13000);
          }
           var lastChild = $scope.dirOptions.directiveFunction()[0][$scope.dirOptions.directiveFunction()[0].length-true_background],
              lastSubChild= angular.element(lastChild).children().children()[1],
              lastSubChildFirst= angular.element(lastChild).children();
          return {
              "yourSum":atLast_ans,
              "color_true":function(){
                  angular.element(lastSubChild).css("background", "#F8951F");
                  angular.element(lastSubChildFirst).css("color", "#F8951F");
              },
              lastByElem:atLastByLast
          }
      }
      
 
      $scope.total_array = []; 
      console.log($localStorage.array_storage)

      $scope.total = function(){
           return {
               loc_stor:$localStorage.array_storage
           }
      }
      this.takeYourMoney = function(){
          if(true_background >0){
              this.finly_sum = this.background_true().lastByElem;
              var repl_bots = this.finly_sum.replace(/\,/g, "");
              var new_totObj = {};
              new_totObj.name = $scope.name;
              new_totObj.price = repl_bots;
              if($localStorage.array_storage){
                  $localStorage.array_storage.push(new_totObj)
              }
              else{   
                $scope.total_array.push(new_totObj)
                $localStorage.array_storage = $scope.total_array;
              }

          }
          if(repl_bots > 499){
              var audio_take = new Audio('play/take_money.mp3');
            audio_take.play();
              angular.element(document.querySelector(".yourSum")).removeClass("another_money");
              angular.element(document.querySelector(".btn-one")).addClass("btn-one-abs");
              var wind_reload_else = function(){
                window.location.href = new_split;
              }
              $timeout(wind_reload_else, 7000);
          }
      }
      let cont_half = 0;
      this.halfTohalf = function(){
          cont_half++;
         
          if(cont_half == 1){
            var audio_half = new Audio('play/50_50.mp3');
            audio_half.play();
            angular.element(document.querySelector(".btn-four")).addClass("btn-four-abs");
              if(this.ind == 0 || this.ind == 3){
                  this.array.splice(this.ind_one, 1, "")
                  this.array.splice(this.ind_three, 1, "");
               
              }
              if(this.ind == 1 || this.ind == 2){
                  this.array.splice(this.ind_three, 1, "")
                  this.array.splice(this.ind_one, 1, "") 
              }
          }
      }.bind(this);
      
      let cont_friend = 0;
      this.ToFriend = function(){
         cont_friend++;
         if(cont_friend == 1){
            var audio_friend = new Audio('play/zang_yngeroj.mp3');
            audio_friend.play();
            angular.element(document.querySelector(".yourFriend")).removeClass("anotherfriend");
             var obj_friend = {
                 obj_func:$scope.friend_opt.friendFunction(),
                 obj_add:angular.element(document.querySelector(".btn-three")).addClass("btn-three-abs"),
                 obj_hidd:angular.element(document.querySelector('.definitely')).css("visibility", "hidden"),
                 obj_right:function(){   
                    angular.element(document.querySelector('.definitely')).css("visibility", "visible");
                    this.right_answer = (document.querySelector('.sm_none_padd').children[this.ind]).children[0].innerText;
                 }.bind(this)
             }
             var right_ans = function(){   
                obj_friend.obj_right();
             }
             $timeout(right_ans, 12000);
             var hide_ans = function(){   
                angular.element(document.querySelector(".yourFriend")).addClass("anotherfriend");
             }
             $timeout(hide_ans, 15000);
         }
      }.bind(this);
     
      
       $scope.ctrlFn = function(){
           return {
               add_class:angular.element(document.querySelector(".btn-two")).addClass("btn-two-abs"),
               inde:this.ind 
           }
       }.bind(this);
    
      var begin_game = function (){
        $http.get(lang_arm).success(function(data_harc){
        
            var name = function (){
                if(true_background <= 4){
                    this.items_obj = data_harc[0];
                }
                if(true_background > 4 && true_background <= 9){
                    this.items_obj = data_harc[1];
                }
                if(true_background > 9 && true_background <= 15){
                    this.items_obj = data_harc[2];
                }
            }.bind(this)
            name();
            
            
            var shuffleArray = function(array) {
              var m = array.length, t, i;
              while (m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
              }
              return array;
            }
            var bool = false;
                
            var repl = function(){
                
                this.items_obj = shuffleArray(this.items_obj);
                this.empty_arr = this.items_obj[0].reply;
                this.quest_arr = [];
                var common = {};
                this.array = [];
                common = this.empty_arr;
                this.one = common.pat1;
                this.two = common.pat2;
                this.three = common.pat3;
                this.four = common.pat4;
                var anywhere = function(){   
                    if(bool){
                        this.questions = function(){   
                            this.array.push(this.one, this.two, this.three, this.four);
                            this.array = shuffleArray(this.array);
                            this.ind = this.array.indexOf(this.four);
                            this.ind_one = this.array.indexOf(this.one);
                            this.ind_three = this.array.indexOf(this.three);
                        }.bind(this)
                        $timeout(this.questions, 200);
                    }
                }.bind(this)
                this.quest_arr.push(this.items_obj[0].harc);
                this.name_txt = function (){
                    var aa = this.quest_arr[0],
                        ccc = aa.split(""),
                        leng_word = aa.length;
                    document.querySelector(".question_wrap").textContent = "";
                    var clrInt = setInterval(function(){
                        leng_word--;
                        if(leng_word == 0){
                            bool = true;
                            anywhere();
                            clearInterval(clrInt);
                            angular.element(document.querySelector(".sm_none_padd")).removeClass("after_show")
                        }
                        if(c.length> 0){
                            var ddd = ccc.splice(0, 1)
                            document.querySelector(".question_wrap").innerHTML += ddd;
                        }
                    }, 70);
                }.bind(this)
                this.name_txt();
            }.bind(this);
            repl();    
            var disantec = 15;
            $scope.click_val = function(eva, any){
                var audio_ans = new Audio('play/harcin_patasxanel.mp3');
                audio_ans.play();
                angular.element(document.querySelector(".sm_none_padd")).addClass("after_show")
                if(eva == this.four){
                    disantec--;
                    function Bounce() {
                        var offs = angular.element(document.querySelector(".numbers_wrap")).children("div")[disantec].offsetTop;
                         angular.element(document.querySelector(".pointer")).css({
                             top :offs +"px"
                         })
                    }
                    Bounce();
                    console.log(true)
                    name();
                    var aaa = this.items_obj.splice(this.items_obj[0], 1);
                    
                    var greenAns = function(){
                        var audio_rgh = new Audio('play/chisht_pat.mp3');
                        audio_rgh.play();
                        true_background++;
                       this.background_true().color_true();
                        if(any == "dirOpt"){
                            $scope.dirOpt.greenFunc();
                            var rem_add_class = function(){
                                $scope.dirOpt.dirFunc();
                            }
                            $timeout(rem_add_class, 3000);
                        }
                        if(any == "dirOpt2"){
                            $scope.dirOpt2.greenFunc2();
                            var rem_add_class = function(){
                                $scope.dirOpt2.dirFunc2();
                            }
                            $timeout(rem_add_class, 3000);
                        }
                        if(any == "dirOpt3"){
                            $scope.dirOpt3.greenFunc3();
                            var rem_add_class = function(){
                                $scope.dirOpt3.dirFunc3();
                            }
                            $timeout(rem_add_class, 3000);
                        }
                        if(any == "dirOpt4"){
                            $scope.dirOpt4.greenFunc4();
                            var rem_add_class = function(){
                                $scope.dirOpt4.dirFunc4();
                            }
                            $timeout(rem_add_class, 3000);
                        }
                    }.bind(this)
                    $timeout(greenAns, 3000);
                    var next_quest = function(){
                        if(true_background<15){
                            this.items_obj = shuffleArray(this.items_obj);
                            repl();
                        }
                    }.bind(this)
                    $timeout(next_quest, 7500);
                }
                else{
                    true_background++;
                    //des.attributes['class'].value attributnes stanum
                    var redAns = function(){
                        var audio_wrong = new Audio('play/krvel.mp3');
                        audio_wrong.play();
                        this.finly_sum = this.background_true().yourSum; 
                        var repl_bots = this.finly_sum.replace(/\,/g, "");
                         var new_totObj = {};
                          new_totObj.name = $scope.name;
                          new_totObj.price = repl_bots;
                          if($localStorage.array_storage){
                              $localStorage.array_storage.push(new_totObj)
                          }
                          else{   
                            $scope.total_array.push(new_totObj)
                            $localStorage.array_storage = $scope.total_array;
                          }
                        this.your_sum = true;
                        if(any == "dirOpt"){
                            $scope.dirOpt.redFunc();
                        }
                        if(any == "dirOpt2"){
                            $scope.dirOpt2.redFunc2();
                        }
                        if(any == "dirOpt3"){
                            $scope.dirOpt3.redFunc3();
                        }
                        if(any == "dirOpt4"){
                            $scope.dirOpt4.redFunc4();
                        }
                    }.bind(this)
                    $timeout(redAns, 2000);
                    var desc = angular.element($(document.querySelector('.sm_none_padd')).children().children()[this.ind])
                    var show_sum = function(){
                        angular.element(document.querySelector(".yourSum")).removeClass("another_money");
                    }
                    $timeout(show_sum, 2000);
                    var repeatGreen = function(){
                        desc.addClass("green_true");
                    }
                    $timeout(repeatGreen, 2000);
                        
                    var wind_reload = function(){
                        window.location.href = new_split;
                    }
                    $timeout(wind_reload, 5000);
                    console.log(false)
                }
            }.bind(this);
         }.bind(this));
       
      }.bind(this)
      $timeout(begin_game, 20000)
  }.bind(this)
  
    
   
    this.isActive = function(){
        d = c + "?=arm";
        console.log(d)
    }
    this.isActive1 = function(){
        d = c + "?=eng";
    }
    $scope.woman_func = function(){
        e = d + "?=woman";
    }
    $scope.man_func = function(){
        e = d + "?=man";
    }
    
    $scope.status = false;
    $scope.status_2 = false;
    
    $scope.goTo = function(){
        $localStorage.LocalMessage = $scope.fileList;
        if($scope.status_2 == false || $scope.status == false){
            $scope.red_requaired = "red_true";
        }
        else if(($scope.status_2 == true || $scope.status == true) && $scope.fileList != "" && $scope.fileList != undefined){
            $scope.progress= 'full_progg';
            var ereval = function(){  
                window.location.href = e;
            }
            $timeout(ereval, 1500);
        }
        if($scope.fileList != "" && $scope.fileList != undefined){ 
            $scope.invalid = false;   
        }
        else{
            $scope.invalid = true;   
        }
    }
    $scope.thes = function(item){
        $scope.fileList = item;
        angular.element(document.querySelector("#block")).css("display","none");
    };
    window.addEventListener("keydown", function(e){
       if(e.keyCode === 8) {
           if($scope.fileList.length == 1){
               angular.element(document.querySelector("#block")).css("display","none");
           }
        };
   });
   $scope.thiss = function(em){ 
       $scope.invalid = false; 
       if($scope.fileList == ""){
           angular.element(document.querySelector("#block")).css("display","block");
       }
   };
    var new_tot = {
        name:$scope.name,
        sum:15
    }
   
});
app.directive('bestPlayer', function($compile) {
  return {
    restrict: 'A',
    controller: 'myCtrl',
    link: function(scope, element, attrs) {
            
        element.bind("click", function(){
            if(document.querySelector(".cont_hist").children.length == 0){
                var pageElement_div = angular.element(document.querySelector(".cont_hist"));
                var html_div = "<div class='anang_once'><span class='no_result'>No Result</span></div>",
                    compiledElement_div = $compile(html_div)(scope);
                pageElement_div.append(compiledElement_div);
            }
            if(scope.total().loc_stor){
                var end_arr= [];
                end_arr = [...scope.total().loc_stor];
                end_arr.sort(function(a,b){return b.price-a.price});
                var pageElement = angular.element(document.querySelector(".cont_hist"));
                pageElement.empty();
                if(end_arr.length > 10){
                    end_arr.splice(10)
                }
                angular.forEach(end_arr, function(value, key){
                    var html = "<div class='anang_once'><span class='aran_num'>"+(key+1)+"</span><p class='aran_name'>"+value.name+"</p><span class='aran_price'>"+value.price+"</span></div>",
                        compiledElement = $compile(html)(scope);
                    pageElement.append(compiledElement);
                })
            }
        })
     }
   }
})

app.directive("direct", function(){
   return {
      restrict: 'A',
      controller: 'myCtrl',
      link:function(scope, element, attributes){
         element.bind("click", function(){
             var audio_hall = new Audio('play/dahlich.mp3');
             audio_hall.play();
             scope.ctrlFn();
             angular.element(document.querySelector(".yourHall")).removeClass("anotherHall");
             var child_p = angular.element(document.querySelector(".common_wrap_hall")).children(),
                 ind_true = scope.ctrlFn().inde;
             (function (e) {
                 function Numbers(max, min){
                    this.max_b = max;
                    this.min_b = min;
                     return {
                         eats:Math.floor(Math.random()*(this.max_b-this.min_b)+this.min_b)
                     }
                 }
                var a = Numbers(35, 60).eats, 
                    b = 100 - a,
                    c = (b*50)/100,
                    d = (b*40)/100,
                    e = (b*10)/100;
                 
                 setTimeout(function(){
                     var emp_array = [];
                     $(child_p[ind_true].children[1]).addClass("height"+ind_true);
                     for(var i=0; i < child_p.length; i++){
                         if(i == ind_true)continue;
                        emp_array.push(i);
                        $(child_p[i].children[1]).addClass("height"+i);
                     }
                     let value1 = c + "%",
                         inputBg1 = `--bg-`+emp_array[0],
                         value2 = d + "%",
                         inputBg2 = `--bg-`+emp_array[1],
                         value3 = e + "%",
                         inputBg3 = `--bg-`+emp_array[2];
                         document.documentElement.style.setProperty(inputBg1, value1);
                         document.documentElement.style.setProperty(inputBg2, value2);
                         document.documentElement.style.setProperty(inputBg3, value3);
                     var emp_array_2 = [];
                         emp_array_2.push(value1, value2, value3);
                     for(var j =0; j< emp_array_2.length; j++){
                         child_p[emp_array[j]].children[0].innerHTML = emp_array_2[j];
                     }
                     var value0 = a+"%",    
                         inputBg0 = `--bg-`+ind_true;
                     document.documentElement.style.setProperty(inputBg0, value0);
                     child_p[ind_true].children[0].innerHTML = value0;
                 }, 6000)
                 
             }())
             setTimeout(function(){
                 angular.element(document.querySelector(".yourHall")).addClass("anotherHall");
             }, 10000)
         })
      }
   }
});

var arr = [];         
app.directive('childElement', function() {
  return {
    restrict: 'A',
    scope: { options: '='},
    link: function(scope, element, attrs) {
        angular.extend(scope.options, {
            directiveFunction: function(){
                arr.push(element.children());
                var a = 0;
                var int = setInterval(function(){
                    a++;
                    angular.element(arr[0][a]).css("opacity", "1");
                    switch(a){
                        case element.children().length:
                            clearInterval(int);
                            angular.element(arr[0][0]).css("opacity", "1");
                            break;
                        default:break
                    }
                    //return (a == element.children().length) ? clearInterval(int): 0 ;
                }, 700);
                return arr;
            }
        });  
    }
  };
})

app.directive('toFriend', function() {
  return {
    restrict: 'A',
    scope: { options: '='},
    link: function(scope, element, attrs) {
        angular.extend(scope.options, {
            friendFunction: function(){
               const dots = n => {
                    var obj_dots = {
                        cal: element.children()[0].textContent,
                        cal2: element.children()[1].textContent,
                        count:0,
                        count_race:0,
                        cal_finished:0,
                        set_Inter:function(){
                            var ccal2 = this.cal2.split(""),
                                leng_cal = ccal2.length;
                            this.cal2 = "";
                            element.children()[1].innerHTML = this.cal2;
                            var clrIntDir = setInterval(function(cal_finished){
                                this.cal_finished++;
                                leng_cal--;
                                if(leng_cal == 0){
                                    workedFunc();
                                    clearInterval(clrIntDir);
                                }
                                if(true){
                                    var dcal2 = ccal2.splice(0, 1)
                                    element.children()[1].innerHTML += dcal2;
                                }
                            }.bind(this), 200);
                            const workedFunc = m => {
                               
                                var clr_dots = setInterval(function(){
                                    this.count++;
                                    if(this.count == 4){
                                        this.count_race++;
                                        this.cal = "Calling ";
                                        this.count = 0;
                                    }
                                    if(this.count_race <= 1){
                                        this.cal = this.cal+".".repeat(1);
                                        document.querySelector(".call_dots").innerHTML = this.cal;
                                    }
                                    if(this.count_race > 1){
                                        clearInterval(clr_dots);
                                        document.querySelector(".call_dots").innerHTML = this.cal
                                        delete this.count;
                                    }
                                }.bind(this), 1000)
                            }
                        }
                    }
                    return obj_dots.set_Inter();
                }
                dots();
            }
        });  
    }
  };
})

app.directive("asksOne", function(){
    return {
        restrict:"A",
        scope: { opt:'='},
        link: function(scope, elem, attrs){
     
            elem.on("click", function(){
            console.log(attrs.opt)
            if(attrs.opt== "dirOpt"){
                elem.addClass("test_true");
                angular.extend(scope.opt, {
                    dirFunc: function(){
                        elem.removeClass("green_true");
                    },
                    greenFunc: function(){
                        elem.addClass("green_true");
                        elem.removeClass("test_true");
                    },
                    redFunc: function(){
                        elem.addClass("red_false");
                        elem.removeClass("test_true");
                    }
                    
                }); 
            }
            else if(attrs.opt== "dirOpt2"){
                elem.addClass("test_true");
                angular.extend(scope.opt, {
                   dirFunc2: function(){
                        elem.removeClass("green_true");
                    },
                    greenFunc2: function(){
                        elem.addClass("green_true");
                        elem.removeClass("test_true");
                    },
                    redFunc2: function(){
                        elem.addClass("red_false");
                        elem.removeClass("test_true");
                    }
                   
                }); 
            }
            else if(attrs.opt== "dirOpt3"){
                elem.addClass("test_true");
                angular.extend(scope.opt, {
                    dirFunc3: function(){
                        elem.removeClass("green_true");
                    },
                    greenFunc3: function(){
                        elem.addClass("green_true");
                        elem.removeClass("test_true");
                    },
                    redFunc3: function(){
                        elem.addClass("red_false");
                        elem.removeClass("test_true");
                    }
                }); 
            }
            else if(attrs.opt== "dirOpt4"){
                elem.addClass("test_true");
                angular.extend(scope.opt, {
                    dirFunc4: function(){
                        elem.removeClass("green_true");
                    },
                    greenFunc4: function(){
                        elem.addClass("green_true");
                        elem.removeClass("test_true");
                    },
                    redFunc4: function(){
                        elem.addClass("red_false");
                        elem.removeClass("test_true");
                    }
                }); 
            }
            })
        }
    }
});
app.filter('startsWith', function() {
   return function(items, prefix, itemProperty) {
      return items.filter(function(item) {
        var findIn = itemProperty ? item[itemProperty] : item;
        return findIn.toString().indexOf(prefix) === 0;
      });
    };
  });

app.config(function ($translateProvider) {
      $translateProvider.translations('=eng', {
          clear:"Clear",
          top_player:"Top Player",
          a_arm:"A.",
          b_arm:"B.",
          c_arm:"C.",
          d_arm:"D.",
          beg_game:"Are You begining game",
          yes_beg:"Yes",
          your_sum:"Your earned money",
          str_dram:"AMD",
          win_you:"Congratulations, you win",
          definitaly:"Definitaly",
          ans_a:"A . ",
          ans_b:"B . ",
          ans_c:"C . ",
          ans_d:"D . "
      });
    $translateProvider.translations('=arm', {
          clear:"Մաքրել",
          top_player:"Լավագույներ",
          a_arm:"Ա.",
          b_arm:"Բ.",
          c_arm:"Գ.",
          d_arm:"Դ.",
          beg_game:"Ցանկանում եք սկսել խաղը՝",
          yes_beg:"Այո",
          your_sum:"Ձեր վաստակած գումարը՝",
          str_dram:"դրամ",
          win_you:"Շնորհավորում ենք Դուք հաղթեցիք ՝",    
          definitaly:"Միանշանակ",
          ans_a:"Ա . ",
          ans_b:"Բ . ",
          ans_c:"Գ . ",
          ans_d:"Դ . "
      });
    //$translateProvider.preferredLanguage('hy');
});

$(document).ready(function(){
    $(window).resize(function(){
        let ask1 = $(".bac_img").height(),
        quest1 = $(".common_wrap_asks").height();
         $(".common_wrap_asks").css({
            position:"absolute",
            width:"100%",
            top:ask1 - (quest1+70)
        })
    })
    $(".bac_img").on("load", function() {
        $(".common_wrap_asks").css({
            position:"absolute",
            width:"100%",
            top:$(this).height() - ($(".common_wrap_asks").height() + 70)
        });
        setTimeout(function(){
            $(".your_name").css({
                opacity:1,
                transform:"scale(1)"
            });
        }, 1000)
    })
    //newq = shuffleArray(newq);
    function makeNewPosition(){
        var h = $(".dublicate").height() - 50;
        var w = $(".dublicate").width() - 50;
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        return [nh,nw];    
    }
    function animateDiv(){
        var newq = makeNewPosition();
        $('.child_duble').animate({ top: newq[0], left: newq[1]}, 6000, function(){
          animateDiv();        
        });
    }
    function factorial(n) { 
    var duble;
          setInterval(function(){
            animateDiv();
            duble = $(".child_duble").clone();
              if(n < 5){
                  n++;
                  $(".dublicate").append(duble);
              }
          }, 4000)
    }
    factorial(0);
    
    function animateSpan(n){
        var newq = 10+"%";
        setInterval(function(){
            n--;
             if(n < 0){
                return 0;
            }
            var count_child = $('.animate_dots').children().length;
            var clone_span1 = $('.animate_dots').children()[0],
                clone_span2 = $('.animate_dots').children()[1];
            var clone_ind1 = $(clone_span1).clone(),
                clone_ind2 = $(clone_span2).clone();
            clone_ind1.appendTo($('.animate_dots'));
            clone_ind2.appendTo($('.animate_dots'));
            $(clone_ind1).animate({ left: newq, opacity:0}, 3000);
            $(clone_ind2).animate({ right: newq, opacity:0}, 3000);
        }, 800)
    }
    $(".hall_call").on("click", function(){    
        animateSpan(15)
    })
    
    
    
    
})
//jQuery end

