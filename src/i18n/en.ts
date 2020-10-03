/* eslint-disable @typescript-eslint/camelcase */
export default {
    menu: {
        new_game: 'New game',
        how_to_play: 'How to play',
        exit: 'Exit',
    },
    startScreen: {
        play: 'Play',
        rules: 'Rules',
        language: 'Language',
    },
    rules: {
        title: 'Rules',
        game_round: 'Game round',
        text: `A game is a sequence of short rounds. In each round players find themselves in 
        a certain location and each one has its own status. At least 
        one player turns out to be a spy who doesn't know anything about the location. 
        His task is determining the location due to questions and answers between participants and not to reveal himself. 
        Each peaceful player for his part tries to make it clear to "friends" that he isn't a spy.
        Observation, concentration, endurance, cunning — everything will come in handy in this game. Watch your back!`,
    },
    settings: {
        buttonsWizard: {
            previous: 'Previous',
            next: 'Next',
        },
        players: {
            new_player_name_prefix: 'Player',
            title: 'Players',
            add_players: 'Add players which will play:',
        },
        spies: {
            title: 'Spies',
            random_count_of_spies: 'Random number of spies',
            set_specific_count_of_spies: 'Set up number of spies',
            is_spies_familiar: 'Spies familiar',
        },
        time: {
            title: 'Time',
            sound_after_time_up: 'Timer sound',
            time_unit: 'min',
            questions_time_limit: 'Time for questions',
            discussion_time_limit: 'Time for discussion',
        },
        locations: {
            title: 'Locations',
            press_icon_to_enable_location_category: 'Press icon to toggle locations category:',
            edit_category: 'Edit category',
            basic_locations_title: 'Basic',
            custom_locations_title: 'Custom',
            start_game: 'Play',
        },
    },
    playerProfile: {
        title: 'Player profile',
        type_player_name: 'Type player name...',
        remove_player: 'Remove player',
        save: 'Save',
    },
    basicLocations: {
        title: 'Basic locations',
        choose_locations: 'Select locations which can be used in the game:',
        save: 'Save',
    },
    customLocations: {
        title: 'Custom locations',
        type_locations: 'Add locations which can be used in the game:',
        type_location_name_and_press_enter: 'Type location name and press ENTER...',
        save: 'Save',
    },
    rolesDistribution: {
        start_game: 'Start game!',
        swipe_and_give_turn_next_player: 'Swipe card to the left and give the turn to the next player',
        click_on_card_to_flip_it: 'Press on card to flip it',
        swipe_card_to_start_game: 'Swipe card to the left to start playing',
        you_are_spy: 'You are a spy',
        be_stealthy_and_watchful: 'be stealthy and attentive!',
        on_your_side: 'On your side:',
    },
    questions: {
        title: 'Questions',
        start_discussion: 'Start discussion',
    },
    discussion: {
        title: 'Discussion',
        guess_spies: 'Identify spies',
    },
    identifySpies: {
        title: 'Identify spies',
        choose_spies_icons: 'Select the icons of the possible spies:',
        show_results: 'Show results',
    },
    results: {
        title_results: 'Result',
        start_new_game: 'Start a new game',
        congrats_all_spies_catched: 'Congratulations! Not a single spy managed to escape!',
        you_identified_only_part_of_spies:
            'You only uncovered a few of the spies, the rest disappeared into the night!',
        none_of_spies_was_catched: "The spies turned out to be smarter - you didn't reveal any of them!",
        show_spies: 'Show spies',
        title_show_spies: 'Spies',
    },
};
/* eslint-enable @typescript-eslint/camelcase */
