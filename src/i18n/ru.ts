/* eslint-disable @typescript-eslint/camelcase */
export default {
    menu: {
        new_game: 'Новая игра',
        how_to_play: 'Как играть',
        exit: 'Выйти из игры',
    },
    startScreen: {
        play: 'Играть',
        rules: 'Правила',
        language: 'Язык',
    },
    rules: {
        title: 'Правила',
        game_round: 'Игровая партия',
        texts: [
            'Игровая партия состоит из последовательности коротких раундов. В каждом раунде игроки оказываются в какой-то локации, у каждого — свой статус.',
            'Один неизбежно оказывается шпионом, который не знает, где находится. Его задача — разговорить других игроков, определить локацию и не разоблачить себя.',
            'Каждый мирный игрок в свою очередь пытается обтекаемо дать понять «своим», что знает, где находится, и поэтому не является шпионом.',
            'Наблюдательность, собранность, выдержка, хитрость — в этой игре пригодится пригодится всё. Будьте начеку!',
        ],
    },
    settings: {
        buttonsWizard: {
            previous: 'Назад',
            next: 'Вперед',
        },
        players: {
            new_player_name_prefix: 'Игрок',
            title: 'Игроки',
            add_players: 'Добавьте игроков, которые будут участвовать в игре:',
        },
        spies: {
            title: 'Шпионы',
            random_count_of_spies: 'Случайное число шпионов',
            set_specific_count_of_spies: 'Установить число шпионов',
            is_spies_familiar: 'Шпионы знакомы',
        },
        time: {
            title: 'Время',
            sound_after_time_up: 'Звук по окончании',
            time_unit: 'мин',
            questions_time_limit: 'Длительность кона',
            discussion_time_limit: 'Длительность обсуждения',
        },
        locations: {
            title: 'Локации',
            press_icon_to_enable_location_category: 'Нажмите на иконку, чтобы выбрать категории локаций:',
            edit_category: 'Редактировать категорию',
            basic_locations_title: 'Базовые',
            custom_locations_title: 'Кастомные',
            start_game: 'Играть',
        },
    },
    playerProfile: {
        title: 'Профиль игрока',
        type_player_name: 'Введите имя игрока...',
        remove_player: 'Удалить игрока',
        save: 'Сохранить',
    },
    basicLocations: {
        title: 'Базовые локации',
        choose_locations: 'Выберите локации, которые будут участвовать в игре:',
        save: 'Сохранить',
    },
    customLocations: {
        title: 'Кастомные локации',
        type_locations: 'Введите локации, которые будут участвовать в игре:',
        type_location_name_and_press_enter: 'Введите название и нажмите Enter...',
        save: 'Сохранить',
    },
    rolesDistribution: {
        start_game: 'Начать игру!',
        swipe_and_give_turn_next_player: 'Сдвиньте карту влево и передайте ход следующему игроку',
        click_on_card_to_flip_it: 'Нажмите на карту, чтобы перевернуть ее',
        swipe_card_to_start_game: 'Сдвиньте карту влево чтобы начать игру',
        you_are_spy: 'Вы - шпион',
        be_stealthy_and_watchful: 'будьте скрытным и внимательным!',
        on_your_side: 'На вашей стороне:',
    },
    questions: {
        title: 'Кон',
        start_discussion: 'Начать обсуждение',
    },
    discussion: {
        title: 'Обсуждение',
        guess_spies: 'Угадать шпионов',
    },
    identifySpies: {
        title: 'Угадать шпионов',
        choose_spies_icons: 'Выберите иконки предполагаемых шпионов:',
        show_results: 'Узнать результат',
    },
    results: {
        title_results: 'Результат',
        start_new_game: 'Начать новую игру',
        congrats_all_spies_catched: 'Поздравляем! Ни одному шпиону не удалось скрыться!',
        you_identified_only_part_of_spies: 'Вы раскрыли только нескольких шпионов, остальные скрылись в ночи!',
        none_of_spies_was_catched: 'Шпионы оказались умнее – вы не раскрыли ни одного из них!',
        show_spies: 'Раскрыть шпионов',
        title_show_spies: 'Раскрыть шпионов',
    },
};
/* eslint-enable @typescript-eslint/camelcase */
